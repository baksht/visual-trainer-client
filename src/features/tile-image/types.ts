import { ImageStore } from 'src/store';

export interface Props {
  store: ImageStore;
  imageSize?: number;
  tileId?: string;
}
