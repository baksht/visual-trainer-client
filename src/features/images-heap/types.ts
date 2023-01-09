import { HeapStore as Heap } from 'src/store';

export interface Props {
  isDragging: boolean;
  store: Heap;
  imageSize: number;
  incrementImageSwitches?(): void;
}
