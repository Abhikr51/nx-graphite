import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';import App from './app/app';
import { SaltProvider } from '@salt-ds/core';
import "@salt-ds/theme/index.css";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/300-italic.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/500-italic.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/600-italic.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/700-italic.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/open-sans/800-italic.css";
import "@fontsource/pt-mono";
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <BrowserRouter>
    <SaltProvider>
      <App/>
      </SaltProvider>
    </BrowserRouter>
    
  </>
)
