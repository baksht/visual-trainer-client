import { ProgressBarStore } from 'src/store';

export interface Props {
  store: ProgressBarStore | null;
  isShown: boolean;
  width: number;
}
