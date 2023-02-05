import { observer } from 'mobx-react-lite';

import { Container, LevelItem } from 'src/features/levels-bar/styled';
import { Props } from 'src/features/levels-bar/types';

const LevelsBar: React.FC<Props> = observer(function ProgressBar(props) {
  const { numberOfLevel, width } = props;

  return (
    <Container width={width}>
      {Array.from({ length: 10 }, (_, index) => (
        <LevelItem isSelected={index + 1 === numberOfLevel}>{index + 1}</LevelItem>
      ))}
    </Container>
  );
});

export default LevelsBar;
