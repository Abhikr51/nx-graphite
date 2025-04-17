import '../styles.css';
import AppHeader from "./components/AppHeader";
import apiInitializer from "./api/apiInitializer";
import ReferenceDataPage from "./components/ReferencetabsInfo/ReferenceDataPage";
import Menubar from "./components/Menubar/Menubar"
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
