import {
  DragEndEvent,
  DragStartEvent,
  DndContext,
  useSensor,
  useSensors,
  TouchSensor,
  MouseSensor,
  DragOverlay,
} from '@dnd-kit/core';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import {
  GridContainer,
  ImagesHeap,
  TileImage,
  ProgressBar,
  ImageReferenceModal,
  LevelsBar,
  TrainingFinishModal,
} from 'src/features';
import { PageContainer } from 'src/pages/training-page/styled';
import { Props } from 'src/pages/training-page/types';
import { Loader } from 'src/shared/components';
import { useElementSize } from 'src/shared/hooks';
import { hasValue } from 'src/shared/utils';

const TrainingPage: React.FC<Props> = observer(function TrainingPage(props) {
  const { store } = props;

  const sensors = useSensors(useSensor(TouchSensor), useSensor(MouseSensor));

  const [isDragging, setIsDragging] = useState<boolean>(false);

  function onDragStart(event: DragStartEvent): void {
    store.setActiveId(event.active.id.toString());
    setIsDragging(true);
  }

  function onDragEnd(event: DragEndEvent): void {
    setIsDragging(false);

    const { active, over } = event;

    const activeImage = store.activeImage;
    const from = active?.data.current?.from;
    const to = over?.id;

    if (activeImage && from !== to) {
      const toTile = to ? store.getTile(to.toString()) : null;
      const fromTile = from ? store.getTile(from) : null;

      if (toTile && from === 'heap' && !toTile.image) {
        store.heap.setImages(store.heap.images.filter((unmatchedImage) => unmatchedImage.id !== store.activeId));
        toTile.setImage(activeImage);
        store.finishStep(toTile.order === activeImage.order);
      }

      if (to === 'heap' && fromTile) {
        fromTile?.setImage(null);
        store.heap.setImages(store.heap.images.concat(activeImage));
        store.finishStep(fromTile.order !== activeImage.order);
      }

      if (toTile && fromTile && !toTile.image) {
        fromTile.setImage(toTile.image);
        toTile.setImage(activeImage);
        store.finishStep(toTile.order !== activeImage.order);
      }
    }
  }

  const { ref, width, height } = useElementSize();

  function getGridSize(width?: number, height?: number): number {
    const maxGridContainerSize = 500;

    if (!hasValue(width) || !hasValue(height)) {
      return maxGridContainerSize;
    }

    return Math.min(width, height, maxGridContainerSize);
  }

  const gridSize = getGridSize(width, height);

  const columnCount = Math.sqrt(store.matchedElements.length);

  const imageSize = gridSize / columnCount - 10;

  return (
    <PageContainer ref={ref} isLoading={store.isLoading}>
      {store.isLoading ? (
        <Loader size="small" />
      ) : (
        <>
          <LevelsBar width={gridSize} numberOfLevel={store.numberOfLevel} />
          <ProgressBar isShown={store.isShowProgressBar} store={store.progressBar} width={gridSize} />
          <DndContext sensors={sensors} onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <GridContainer columnCount={columnCount} items={store.matchedElements} gridSize={gridSize} />

            <ImagesHeap
              isDragging={isDragging}
              store={store.heap}
              incrementImageSwitches={store.currentStep?.incrementImageSwitches}
              imageSize={imageSize}
            />

            <DragOverlay>
              {store.activeImage && <TileImage store={store.activeImage} imageSize={imageSize} isLocked={true} />}
            </DragOverlay>
          </DndContext>
        </>
      )}

      <ImageReferenceModal
        isOpened={store.isImagePreviewOpened}
        images={store.orderedImages}
        onStartLevel={store.closeImagePreview}
        gridSize={gridSize}
      />
      <TrainingFinishModal isOpened={store.isFinishTrainingModalOpened} onFinish={store.finishTraining} />
    </PageContainer>
  );
});

export default TrainingPage;
