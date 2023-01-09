import { observer } from 'mobx-react-lite';

import { PageContainer } from 'src/pages/manual-page/styled';
import { Props } from 'src/pages/manual-page/types';
import { Button } from 'src/shared/components';

const ManualPage: React.FC<Props> = observer(function ManualPage(props) {
  const { store } = props;

  return (
    <PageContainer>
      <Button onClick={store.startTraining} buttonText="Начать" />
    </PageContainer>
  );
});

export default ManualPage;
