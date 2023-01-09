import { observer } from 'mobx-react-lite';

import { PageContainer } from 'src/pages/results-page/styled';
import { Button } from 'src/shared/components';
import { useStore } from 'src/shared/hooks';

const ResultsPage: React.FC = observer(function ResultsPage() {
  const { student } = useStore();

  return (
    <PageContainer>
      <Button onClick={student.logout} buttonText="Завершить тренинг" />
    </PageContainer>
  );
});

export default ResultsPage;
