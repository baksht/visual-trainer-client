import { getAccessToken } from 'src/shared/utils';

function hasToken(): boolean {
  return !!getAccessToken();
}

export default hasToken;
