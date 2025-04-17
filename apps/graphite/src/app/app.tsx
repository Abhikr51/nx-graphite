import { Provider } from 'react-redux';
import '../styles.css';
import apiInitializer from './api/apiInitializer';
import AppHeader from "./components/AppHeader";
import { store } from './store';
apiInitializer();
import BreadcrumbEntry from './components/ReferencetabsInfo/BreadCrumbs';

apiInitializer()

export function App() {
  return (
    <Provider store={store}>
      <AppHeader />
      <BreadcrumbEntry />
    </Provider>
  )
}

export default App;