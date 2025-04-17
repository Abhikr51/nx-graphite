import { Provider } from 'react-redux';
import '../styles.css';
import apiInitializer from './api/apiInitializer';
import ReferenceData from './pages/ReferenceData';
import { store } from './store';
apiInitializer();
export function App() {
  return (
    <Provider store={store}>
      <ReferenceData />
    </Provider>
  )
}

export default App;


