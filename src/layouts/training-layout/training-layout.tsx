import { observer } from 'mobx-react-lite';
import { FC } from 'react';

import { Header } from 'src/features';
import { LayoutWrapper, ContentWrapper } from 'src/layouts/training-layout/styled';
import { Props } from 'src/layouts/training-layout/types';

const TrainingLayout: FC<Props> = observer(function TrainingLayout(props) {
  const { children } = props;

  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
});

export default TrainingLayout;
