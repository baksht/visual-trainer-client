import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RootStoreProvider } from 'src/context';
import { MainLayout } from 'src/layouts';
import { Router } from 'src/router';
import { Loader } from 'src/shared/components';
import { RootStore } from 'src/store';
import 'src/styles/fonts.css';

const App: React.FC = observer(function App() {
  const navigate = useNavigate();

  const [store] = useState(() => new RootStore(navigate));

  useEffect(() => {
    store.init();
  }, [store]);

  return (
    <RootStoreProvider store={store}>
      <MainLayout>{store.isInitialized ? <Router /> : <Loader size="large" />}</MainLayout>
    </RootStoreProvider>
  );
});

export default App;
