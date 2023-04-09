import { ACCESS_TOKEN_KEY } from 'src/shared/constants';

function removeAccessToken(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export default removeAccessToken;
