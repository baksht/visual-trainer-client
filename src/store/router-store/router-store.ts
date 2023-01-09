import { action, makeObservable } from 'mobx';
import { NavigateFunction } from 'react-router-dom';

class RouterStore {
  private readonly navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;

    makeObservable(this);
  }

  @action.bound
  public push(href: string) {
    this.navigate(href);
  }

  @action.bound
  public replace(href: string) {
    this.navigate(href, { replace: true });
  }

  @action.bound
  public back(delta?: number) {
    this.navigate(delta || -1);
  }

  @action.bound
  public forward(delta?: number) {
    this.navigate(delta || 1);
  }
}

export default RouterStore;
