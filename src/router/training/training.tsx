import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { TrainingLayout } from 'src/layouts';
import { ManualPage, TrainingPage } from 'src/pages';
import { ROUTES } from 'src/shared/constants';
import { useStore } from 'src/shared/hooks';
import { TrainingStore } from 'src/store';

const Training: React.FC = observer(function Training() {
  const { router, user } = useStore();

  const [store] = useState(() => new TrainingStore(router, user));

  useEffect(() => {
    store.init();
  }, [store]);

  return (
    <TrainingLayout>
      <Routes>
        <Route path={ROUTES.training.manual} element={<ManualPage store={store} />} />
        <Route path={ROUTES.training.test} element={<TrainingPage store={store} />} />
        <Route path={ROUTES.training.root} element={<Navigate to={ROUTES.training.manual} />} />
      </Routes>
    </TrainingLayout>
  );
});

export default Training;
