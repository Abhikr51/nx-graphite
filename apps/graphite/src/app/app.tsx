import { Provider } from 'react-redux';
import '../styles.css';
import apiInitializer from './api/apiInitializer';
import AppHeader from "./components/AppHeader";
import ReferenceDataPage from "./components/ReferencetabsInfo/ReferenceDataPage";
import { store } from './store';
apiInitializer();
export function App() {
  return (
    <Provider store={store}>
      <AppHeader />
      <ReferenceDataPage />
    </Provider>
  )
}

export default App;