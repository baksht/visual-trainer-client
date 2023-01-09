import { observer } from 'mobx-react-lite';
import { Navigate, Outlet } from 'react-router-dom';

import { Props } from 'src/router/private-outlet/types';
import { ROUTES } from 'src/shared/constants';

const PrivateOutlet: React.FC<Props> = observer(function PrivateOutlet(props) {
  const { isAuthenticated } = props;

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.login} />;
});

export default PrivateOutlet;
