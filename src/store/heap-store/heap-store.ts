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
    if (this.images.length > 0 && hasValue(this.selectedImageIndex)) {
      return this.images[this.selectedImageIndex] || this.images[this.images.length - 1];
    }

    return null;
  }

  @computed
  public get isNextImage(): boolean {
    return this.selectedImageIndex < this.images.length - 1;
  }

  @computed
  public get isPreviousImage(): boolean {
    return this.selectedImageIndex > 0;
  }

  @action.bound
  public selectPreviousImage(): void {
    if (this.images.length > 0 && hasValue(this.selectedImageIndex)) {
      this.selectedImageIndex = this.selectedImageIndex === 0 ? this.images.length - 1 : this.selectedImageIndex - 1;
    }
  }

  @action.bound
  public selectNextImage(): void {
    if (this.images.length > 0 && hasValue(this.selectedImageIndex)) {
      this.selectedImageIndex = this.selectedImageIndex === this.images.length - 1 ? 0 : this.selectedImageIndex + 1;
    }
  }

  @action.bound
  public setImages(images: Image[]): void {
    this.images = images;
  }
}

export default HeapStore;
