import { observer } from 'mobx-react-lite';

import { LoginForm } from 'src/features';

const LoginPage: React.FC = observer(function LoginPage() {
  return <LoginForm />;
});

export default LoginPage;
