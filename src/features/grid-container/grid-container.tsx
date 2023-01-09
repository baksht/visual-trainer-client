import { observer } from 'mobx-react-lite';

import { Tile } from 'src/features';
import { Container } from 'src/features/grid-container/styled';
import { Props } from 'src/features/grid-container/types';

const GridContainer: React.FC<Props> = observer(function GridContainer(props) {
  const { columnCount, items, gridSize } = props;

  return (
    <Container columnCount={columnCount} size={gridSize}>
      {items.map((tile) => (
        <Tile key={tile.order} store={tile} />
      ))}
    </Container>
  );
});

export default GridContainer;
