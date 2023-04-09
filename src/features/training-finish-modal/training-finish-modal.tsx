import { observer } from 'mobx-react-lite';

import { ModalWrapper, Title, Description } from 'src/features/training-finish-modal/styled';
import { Props } from 'src/features/training-finish-modal/types';
import { Button, Modal } from 'src/shared/components';

const TrainingFinishModal: React.FC<Props> = observer(function TrainingFinishModal(props) {
  const { isOpened, onFinish } = props;

  return (
    <Modal isOpened={isOpened}>
      <ModalWrapper>
        <Title>Тренинг окончен</Title>
        <Description>Нажмите кнопку "Окончить", чтобы закончить тестирование</Description>
        <Button buttonText="Окончить" onClick={onFinish} />
      </ModalWrapper>
    </Modal>
  );
});

export default TrainingFinishModal;
