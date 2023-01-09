import { AxiosResponse } from 'axios';

import { UserInfoType } from 'src/api';
import agent from 'src/api/agent';
import { ENDPOINTS } from 'src/shared/constants';

export function login(name: string, surname: string): Promise<AxiosResponse<UserInfoType>> {
  return agent.post(ENDPOINTS.student.login, { name, surname });
}

export function checkAuth(): Promise<AxiosResponse<UserInfoType>> {
  return agent.get(ENDPOINTS.student.isAuth);
}
