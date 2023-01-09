import { action, makeObservable, observable, computed } from 'mobx';

import { completeLevel, getLevel, getStatus } from 'src/api';
import { LevelInfoType } from 'src/api/training/types';
import { BACKEND_URL, ROUTES } from 'src/shared/constants';
import { createPromiseController, PromiseControllerType, shuffleArray, hasValue } from 'src/shared/utils';
import {
  ProgressBarStore as ProgressBar,
  RouterStore as Router,
  ImageStore as Image,
  TileStore as Tile,
  HeapStore as Heap,
  StepStore as Step,
} from 'src/store';
import { StepResultType } from 'src/store/step-store/types';

class TrainingStore {
  @observable public isLoading: boolean = false;
  @observable public isImagePreviewOpened: boolean = false;
  @observable private numberOfLevel: number | null = null;
  @observable public activeId: string | null = null;
  @observable public heap: Heap;
  @observable public matchedElements: Tile[] = [];
  @observable private stepsResults: StepResultType[] = [];
  @observable public currentStep: Step | null = null;
  @observable public progressBar: ProgressBar | null = null;
  @observable public orderedImages: Image[] = [];

  private referenceViewingTime: number | null = null;
  private readinessController: PromiseControllerType<void> | null = null;

  private readonly router: Router;

  constructor(router: Router) {
    this.router = router;
    this.heap = new Heap();

    makeObservable(this);
  }

  public async init(): Promise<void> {
    if (this.isLoading) return;
    this.setIsLoading(true);

    try {
      const { data } = await getStatus();

      if (data.isTrainingFinished) {
        this.router.push(`${ROUTES.training.root}/${ROUTES.training.results}`);
        return;
      }

      if (hasValue(data.numberOfNextLevel) && data.isTrainingStarted && !data.isTrainingFinished) {
        this.router.push(`${ROUTES.training.root}/${ROUTES.training.test}`);
        await this.fetchLevel(data.numberOfNextLevel);
        return;
      }

      this.router.push(`${ROUTES.training.root}/${ROUTES.training.manual}`);
    } catch (error) {
      // TODO Обработать ошибку
    } finally {
      this.setIsLoading(false);
    }
  }

  @computed
  public get activeImage(): Image | null {
    return (
      this.matchedElements
        .reduce<Image[]>((prev, curr) => {
          return curr.image ? prev.concat(curr.image) : prev;
        }, [])
        .concat(this.heap.images)
        .find((image) => image?.id === this.activeId) || null
    );
  }

  @computed
  public get isFinished(): boolean {
    return this.matchedElements.every((tile) => tile.isRightImage);
  }

  @computed
  public get isShowProgressBar(): boolean {
    return this.currentStep?.isShowProgressBar ?? false;
  }

  @computed
  public get progressValue(): number {
    return this.matchedElements.reduce<number>((prev, curr) => {
      if (curr.image === null) {
        return prev;
      }

      if (curr.order === curr.image?.order) {
        return prev + 1;
      }

      if (curr.order !== curr.image?.order) {
        return prev - 1;
      }

      return prev;
    }, 0);
  }

  public getTile(id: string): Tile | null {
    return this.matchedElements.find((tile) => tile.id === id) || null;
  }

  @action.bound
  public setActiveId(id: string | null): void {
    this.activeId = id;
  }

  @action.bound
  public finishStep(isRight: boolean): void {
    if (!hasValue(this.numberOfLevel) || !this.currentStep) {
      return;
    }

    if (this.progressBar) {
      this.stepsResults.push(this.currentStep.finishStep(isRight));
      this.progressBar.setValue(this.progressValue);
      this.currentStep = new Step(this.numberOfLevel);
      this.setActiveId(null);
    }

    if (this.isFinished) {
      this.completeLevel();
    }
  }

  @action.bound
  public closeImagePreview(): void {
    this.readinessController?.resolve();
    this.isImagePreviewOpened = false;
  }

  @action.bound
  public startTraining(): void {
    this.router.push(`${ROUTES.training.root}/${ROUTES.training.results}`);

    this.fetchLevel(1);
  }

  @action.bound
  private resetRoundData(): void {
    this.currentStep = null;
    this.progressBar = null;
    this.referenceViewingTime = null;
    this.matchedElements = [];
    this.stepsResults = [];
    this.orderedImages = [];
  }

  @action.bound
  private async openImagePreview(images: Image[]): Promise<void> {
    const startTime = new Date();

    try {
      this.orderedImages = images;
      this.isImagePreviewOpened = true;
      this.readinessController = createPromiseController();

      return await this.readinessController;
    } finally {
      this.referenceViewingTime = new Date().getTime() - startTime.getTime();
      this.readinessController = null;
    }
  }

  @action.bound
  private setIsLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }

  @action.bound
  private async startNewLevel(levelInfo: LevelInfoType): Promise<void> {
    const images = levelInfo.images.map((image) => new Image(image.id, image.order, `${BACKEND_URL}/${image.image}`));

    // TODO Вернуть
    // const mixedImages = shuffleArray(images);
    const mixedImages = images;

    const tiles = Array.from({ length: images.length }, (_, index) => new Tile(`matched-${index}`, index));

    this.router.push(`${ROUTES.training.root}/${ROUTES.training.test}`);

    await this.openImagePreview(images);

    this.heap.setImages(mixedImages);
    this.matchedElements = tiles;
    this.numberOfLevel = levelInfo.numberOfLevel;
    this.progressBar = new ProgressBar(images.length);
    this.currentStep = new Step(levelInfo.numberOfLevel);
  }

  private async fetchLevel(numberOfNextLevel: number): Promise<void> {
    try {
      this.setIsLoading(true);
      const { data } = await getLevel(numberOfNextLevel);

      await this.startNewLevel(data);
    } catch (error) {
      // TODO Обработать ошибку
    } finally {
      this.setIsLoading(false);
    }
  }

  @action.bound
  private async completeLevel(): Promise<void> {
    if (!hasValue(this.numberOfLevel) || !hasValue(this.referenceViewingTime)) {
      return;
    }

    try {
      this.setIsLoading(true);

      const { data } = await completeLevel(this.numberOfLevel, this.referenceViewingTime, this.stepsResults);

      this.resetRoundData();

      if (data.isTrainingFinished) {
        this.router.push(`${ROUTES.training.root}/${ROUTES.training.results}`);
      }

      if (!data.isTrainingFinished && hasValue(data.numberOfNextLevel)) {
        await this.fetchLevel(data.numberOfNextLevel);
      }
    } catch (error) {
      // TODO Обработать ошибку
    } finally {
      this.setIsLoading(false);
    }
  }
}

export default TrainingStore;
