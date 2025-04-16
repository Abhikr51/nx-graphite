import '../styles.css';
import AppHeader from "./components/AppHeader";
// import DashBoardTable from "./components/DashBoardTable";
import ReferenceData from "./pages/ReferenceData";
import apiInitializer from "./api/apiInitializer";
import ReferenceDataPage from "./components/ReferencetabsInfo/ReferenceDataPage";

apiInitializer()
export function App() {
  return (
    <div>
      <AppHeader />
      {/* <DashBoardTable /> */}
      <ReferenceDataPage />
      <ReferenceData />
    </div>
  );
}

export default App;
