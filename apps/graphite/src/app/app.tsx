import '../styles.css';
import AppHeader from "./components/AppHeader";
import apiInitializer from "./api/apiInitializer";
import ReferenceDataPage from "./components/ReferencetabsInfo/ReferenceDataPage";

apiInitializer()

export function App() {
  return (
    <div>
      <AppHeader />
      <ReferenceDataPage />
    </div>
  );
}

export default App;
