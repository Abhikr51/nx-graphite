import '../styles.css';
import AppHeader from "./components/AppHeader";
import Menubar from "./components/Menubar/Menubar"
import apiInitializer from "./api/apiInitializer";
import ReferenceDataPage from "./components/ReferencetabsInfo/ReferenceDataPage";

apiInitializer()

export function App() {
  return (
    <div>
      <AppHeader />
      <Menubar/>
      <ReferenceDataPage />
    </div>
  );
}

export default App;
