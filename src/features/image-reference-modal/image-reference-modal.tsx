import { observer } from 'mobx-react-lite';

import { ImagesContainer, ModalWrapper } from 'src/features/image-reference-modal/styled';
import { Props } from 'src/features/image-reference-modal/types';
import { Button, Modal } from 'src/shared/components';

const ImageReferenceModal: React.FC<Props> = observer(function ImageReferenceModal(props) {
  const { images, isOpened, onStartLevel, gridSize } = props;

  return (
    <Modal isOpened={isOpened}>
      <ModalWrapper>
        <ImagesContainer columnCount={Math.sqrt(images.length)} size={gridSize}>
          {images.map((image) => (
            <img key={image.order} alt={image.order.toString()} src={image.imageLink} />
          ))}
        </ImagesContainer>
        <Button buttonText="Приступить" onClick={onStartLevel} />
      </ModalWrapper>
    </Modal>
  );
});

export default ImageReferenceModal;
