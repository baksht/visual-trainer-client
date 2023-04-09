import { useDroppable } from '@dnd-kit/core';
import { observer } from 'mobx-react-lite';

import { TileImage } from 'src/features';
import { Container, ArrowButton, CurrentImageContainer, Blur } from 'src/features/images-heap/styled';
import { Props } from 'src/features/images-heap/types';

const ImagesHeap: React.FC<Props> = observer(function ImagesHeap(props) {
  const { store, incrementImageSwitches, isDragging, imageSize } = props;

  const { isOver, setNodeRef } = useDroppable({ id: 'heap' });

  function onSelectPreviousImage(): void {
    store.selectPreviousImage();
    incrementImageSwitches && incrementImageSwitches();
  }

  function onSelectNextImage(): void {
    store.selectNextImage();
    incrementImageSwitches && incrementImageSwitches();
  }

  return (
    <Container>
      <ArrowButton
        variant="left"
        onClick={onSelectPreviousImage}
        disabled={!store.isPreviousImage}
        type="button"
        tabIndex={0}
      />
      <CurrentImageContainer isDragging={isDragging} ref={setNodeRef} isOver={isOver} imageSize={imageSize}>
        {store.selectImage && <TileImage store={store.selectImage} tileId="heap" imageSize={imageSize} />}
        {isOver && <Blur />}
      </CurrentImageContainer>
      <ArrowButton
        variant="right"
        onClick={onSelectNextImage}
        disabled={!store.isNextImage}
        type="button"
        tabIndex={0}
      />
    </Container>
  );
});

export default ImagesHeap;
