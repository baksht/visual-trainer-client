import { ACCESS_TOKEN_KEY } from 'src/shared/constants';

function setAccessToken(token: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export default setAccessToken;
