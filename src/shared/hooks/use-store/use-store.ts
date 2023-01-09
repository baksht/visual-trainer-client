import { useContext } from 'react';

import { RootStoreContext } from 'src/context';
import { RootStore } from 'src/store';

function useStore(): RootStore {
  const store = useContext(RootStoreContext);

  if (!store) {
    throw new Error('Store was not provided. Did you forget wrap in <StoreProvider>?');
  }

  return store;
}

export default useStore;
