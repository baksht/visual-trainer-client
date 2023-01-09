import { action, makeObservable, observable } from 'mobx';
import { NavigateFunction } from 'react-router-dom';

import { ROUTES } from 'src/shared/constants';
import { StudentStore, RouterStore } from 'src/store';

export class RootStore {
  @observable isInitialized: boolean = false;
  @observable isLoading: boolean = false;

  public readonly student: StudentStore;
  public readonly router: RouterStore;

  constructor(navigate: NavigateFunction) {
    this.router = new RouterStore(navigate);
    this.student = new StudentStore(this.router);

    makeObservable(this);
  }

  @action.bound
  public async init(): Promise<void> {
    if (this.isLoading) return;

    this.isLoading = true;

    try {
      const isAuth = await this.student.checkAuth();

      if (isAuth) {
        this.router.push(ROUTES.training.root);
      }
    } catch (error) {
      // TODO Обработать ошибку инициализации приложения
    } finally {
      this.isInitialized = true;
      this.isLoading = false;
    }
  }
}

export default RootStore;
