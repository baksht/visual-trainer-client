import { action, makeObservable, observable, computed } from 'mobx';

class ProgressBarStore {
  private readonly numberOfTiles: number;
  private maxValue: number;
  private minValue: number;

  @observable private value: number = 0;

  constructor(numberOfTiles: number) {
    this.maxValue = numberOfTiles;
    this.minValue = -numberOfTiles;
    this.numberOfTiles = numberOfTiles;

    makeObservable(this);
  }

  @computed
  public get percent(): number {
    return ((this.numberOfTiles + this.value) / (this.numberOfTiles * 2)) * 100;
  }

  @action.bound
  public setValue(value: number): void {
    this.value = value;
  }
}

export default ProgressBarStore;
