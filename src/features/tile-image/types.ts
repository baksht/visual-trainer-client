import { ImageStore } from 'src/store';

export interface Props {
  store: ImageStore;
  isLocked?: boolean;
  imageSize?: number;
  tileId?: string;
}
