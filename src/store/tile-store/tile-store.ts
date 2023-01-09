import { action, makeObservable, observable, computed } from 'mobx';

import { ImageStore as Image } from 'src/store';

class TileStore {
  @observable public image: Image | null;

  public readonly id: string;
  public readonly order: number;

  constructor(id: string, order: number, image?: Image) {
    this.id = id;
    this.order = order;
    this.image = image || null;

    makeObservable(this);
  }

  @computed
  public get isRightImage(): boolean {
    return this.order === this.image?.order;
  }

  @action.bound
  public setImage(image: Image | null): void {
    this.image = image;
  }
}

export default TileStore;
