import { useDraggable } from '@dnd-kit/core';
import { observer } from 'mobx-react-lite';

import { Image, Container, LockImage } from 'src/features/tile-image/styled';
import { Props } from 'src/features/tile-image/types';

const TileImage: React.FC<Props> = observer(function TileImage(props) {
  const { store, tileId, imageSize, isLocked } = props;

  const { isDragging, setNodeRef, listeners } = useDraggable({
    id: store.id,
    data: {
      from: tileId ?? null,
    },
  });

  return (
    <Container>
      <Image
        src={store.imageLink}
        imageSize={imageSize}
        alt={`image-${store.id}`}
        isDragging={isDragging}
        isLocked={isLocked}
        ref={setNodeRef}
        {...listeners}
      />
      <LockImage isLocked={isLocked} />
    </Container>
  );
});

export default TileImage;
