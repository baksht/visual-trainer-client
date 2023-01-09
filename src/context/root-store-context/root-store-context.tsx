import { observer } from 'mobx-react-lite';
import { createContext } from 'react';

import { Props } from 'src/context/root-store-context/types';
import { RootStore } from 'src/store';

export const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider: React.FC<Props> = observer(function RootStoreProvider(props) {
  const { children, store } = props;

  return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
});
