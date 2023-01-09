import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from 'src/pages';
import { Training } from 'src/router';
import PrivateOutlet from 'src/router/private-outlet';
import { ROUTES } from 'src/shared/constants';
import { useStore } from 'src/shared/hooks';

const Router: React.FC = observer(function Router() {
  const { student } = useStore();

  return (
    <Routes>
      <Route element={<PrivateOutlet isAuthenticated={student.isAuth} />}>
        <Route path={`${ROUTES.training.root}/*`} element={<Training />} />
      </Route>
      <Route path={ROUTES.login} element={<LoginPage />} />
    </Routes>
  );
});

export default Router;
