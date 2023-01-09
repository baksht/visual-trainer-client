import { TileStore as Tile } from 'src/store';

export interface Props {
  columnCount: number;
  gridSize: number;
  items: Tile[];
}
