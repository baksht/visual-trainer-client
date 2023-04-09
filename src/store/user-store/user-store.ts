import { makeObservable, observable, runInAction, action, computed } from 'mobx';

import { login, checkAuth } from 'src/api';
import { ROUTES } from 'src/shared/constants';
import { getAccessToken, setAccessToken, removeAccessToken } from 'src/shared/utils';
import { RouterStore } from 'src/store';

class UserStore {
  @observable public isAuth: boolean = false;
  @observable public name: string | null = null;
  @observable public surname: string | null = null;

  private readonly router: RouterStore;

  constructor(router: RouterStore) {
    this.router = router;

    makeObservable(this);
  }

  @computed
  public get fullName(): string | null {
    if (this.name && this.surname) {
      return `${this.name} ${this.surname}`;
    }

    return null;
  }

  public async login(name: string, surname: string): Promise<void> {
    try {
      const { data } = await login(name, surname);

      setAccessToken(data.accessToken);

      runInAction(() => {
        this.name = data.name;
        this.surname = data.surname;
        this.isAuth = true;
      });

      this.router.push(ROUTES.training.root);
    } catch (error) {
      // TODO Обработать ошибку
    }
  }

  public async checkAuth(): Promise<boolean> {
    const accessToken = getAccessToken();

    if (!accessToken) {
      this.router.push(ROUTES.login);
      return false;
    }

    try {
      const { data } = await checkAuth();

      setAccessToken(data.accessToken);

      runInAction(() => {
        this.name = data.name;
        this.surname = data.surname;
        this.isAuth = true;
      });

      return true;
    } catch (error) {
      // TODO Обработать ошибку
      this.router.push(ROUTES.login);
      return false;
    }
  }

  @action.bound
  public logout(): void {
    this.isAuth = false;
    this.name = null;
    this.surname = null;

    removeAccessToken();
  }
}

export default UserStore;
