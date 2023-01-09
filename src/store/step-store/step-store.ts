import { action, makeObservable, observable } from 'mobx';

import { StepResultType } from 'src/store/step-store/types';

class StepStore {
  @observable public isShowProgressBar: boolean;

  private imageSwitchesNumber: number = 0;
  private startTime: Date;

  constructor(currentLevel: number) {
    this.startTime = new Date();
    this.isShowProgressBar = Math.random() * 10 <= 10 - (currentLevel - 1);

    makeObservable(this);
  }

  @action.bound
  public incrementImageSwitches(): void {
    this.imageSwitchesNumber++;
  }

  @action.bound
  public finishStep(isRight: boolean): StepResultType {
    return {
      stepTime: new Date().getTime() - this.startTime.getTime(),
      imageSwitchesNumber: this.imageSwitchesNumber,
      isRight,
    };
  }
}

export default StepStore;
