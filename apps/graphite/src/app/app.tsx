import '../styles.css';
import apiInitializer from './api/apiInitializer';
import ReferenceData from './pages/ReferenceData';
apiInitializer();
export function App() {
  return (
    <>
      <ReferenceData />
    </>
  )
}

export default App;


