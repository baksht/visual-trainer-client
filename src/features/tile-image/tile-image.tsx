import { useDraggable } from '@dnd-kit/core';
import { observer } from 'mobx-react-lite';

import { Image } from 'src/features/tile-image/styled';
import { Props } from 'src/features/tile-image/types';

const TileImage: React.FC<Props> = observer(function TileImage(props) {
  const { store, tileId, imageSize } = props;

  const { isDragging, setNodeRef, listeners } = useDraggable({
    id: store.id,
    data: {
      from: tileId ?? null,
    },
  });

  return (
    <Image
      src={store.imageLink}
      imageSize={imageSize}
      alt={`image-${store.id}`}
      isDragging={isDragging}
      ref={setNodeRef}
      {...listeners}
    />
  );
});

export default TileImage;
