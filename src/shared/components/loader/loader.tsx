import { observer } from 'mobx-react-lite';

import { Wrapper } from 'src/shared/components/loader/styled';
import { Props } from 'src/shared/components/loader/types';

const Loader: React.FC<Props> = observer(function Loader(props) {
  const { size } = props;
  return (
    <Wrapper size={size || 'default'}>
      {Array.from({ length: 9 }, (_, index) => (
        <div key={index} />
      ))}
    </Wrapper>
  );
});

export default Loader;
