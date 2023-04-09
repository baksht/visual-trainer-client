import { ACCESS_TOKEN_KEY } from 'src/shared/constants';

function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY) || null;
}

export default getAccessToken;
