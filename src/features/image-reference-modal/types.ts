import { ImageStore as Image } from 'src/store';

export interface Props {
  isOpened: boolean;
  images: Image[];
  gridSize: number;
  onStartLevel(): void;
}
