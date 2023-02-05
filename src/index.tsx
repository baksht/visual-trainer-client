import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/app';
import GlobalStyles from 'src/styles/global-styles';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  );
}
