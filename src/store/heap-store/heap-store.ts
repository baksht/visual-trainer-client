import { action, makeObservable, observable, computed } from 'mobx';

import { hasValue } from 'src/shared/utils';
import { ImageStore as Image } from 'src/store';

class HeapStore {
  @observable private selectedImageIndex: number = 0;
  @observable public images: Image[] = [];

  constructor() {
    makeObservable(this);
  }

  @computed
  public get selectImage(): Image | null {
    if (this.images.length > 0) {
      return this.images[this.selectedImageIndex] || this.images[this.images.length - 1];
    }

    return null;
  }

  @computed
  public get isNextImage(): boolean {
    return hasValue(this.images[this.selectedImageIndex + 1]);
  }

  @computed
  public get isPreviousImage(): boolean {
    return hasValue(this.images[this.selectedImageIndex - 1]);
  }

  @action.bound
  public selectPreviousImage(): void {
    if (this.isPreviousImage) {
      this.selectedImageIndex = this.selectedImageIndex - 1;
    }
  }

  @action.bound
  public selectNextImage(): void {
    if (this.isNextImage) {
      this.selectedImageIndex = this.selectedImageIndex + 1;
    }
  }

  @action.bound
  public setImages(images: Image[]): void {
    this.images = images;
    this.selectedImageIndex = images[this.selectedImageIndex] ? this.selectedImageIndex : 0;
  }
}

export default HeapStore;
