import { observer } from 'mobx-react-lite';

import { Container, ProgressLine } from 'src/features/progress-bar/styled';
import { Props } from 'src/features/progress-bar/types';

const ProgressBar: React.FC<Props> = observer(function ProgressBar(props) {
  const { store, isShown, width } = props;

  if (!store) {
    return null;
  }

  return (
    <Container isShown={isShown} width={width}>
      <ProgressLine percent={store.percent} />
    </Container>
  );
});

export default ProgressBar;
