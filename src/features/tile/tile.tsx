import { useDroppable } from '@dnd-kit/core';
import { observer } from 'mobx-react-lite';

import { TileImage } from 'src/features';
import { TileContainer, Blur } from 'src/features/tile/styled';
import { Props } from 'src/features/tile/types';

const Tile: React.FC<Props> = observer(function Tile(props) {
  const { store } = props;

  const { isOver, setNodeRef } = useDroppable({
    id: store.id,
  });

  return (
    <TileContainer ref={setNodeRef} isOver={isOver}>
      {store.image && <TileImage store={store.image} tileId={store.id} />}
      {isOver && <Blur isAllowed={!store.image} />}
    </TileContainer>
  );
});

export default Tile;
