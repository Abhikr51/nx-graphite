import '../styles.css';
import AppHeader from "./components/AppHeader";
import Menubar from "./components/Menubar/Menubar"
import ReferenceData from "./pages/ReferenceData";
import apiInitializer from "./api/apiInitializer";
import ReferenceDataPage from "./components/ReferencetabsInfo/ReferenceDataPage";

apiInitializer()

export function App() {
  return (
    <div>
      <AppHeader />
      <ReferenceDataPage />
      <Menubar/>
      <ReferenceData />
    </div>
  );
}

export default App;
