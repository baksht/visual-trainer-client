import { observer } from 'mobx-react-lite';
import { FC } from 'react';

import { Wrapper } from 'src/layouts/main-layout/styled';
import { Props } from 'src/layouts/main-layout/types';

const MainLayout: FC<Props> = observer(function MainLayout(props) {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
});

export default MainLayout;
