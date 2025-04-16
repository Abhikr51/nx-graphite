import "../styles.css";
import AppHeader from "./components/AppHeader";
// import DashBoardTable from "./components/DashBoardTable";
import ReferenceData from "./pages/ReferenceData";
import TabRouter from './TabRouter';
import apiInitializer from "./api/apiInitializer";
apiInitializer()

export function App() {
  return (
    <div>
      <AppHeader />
      {/* <DashBoardTable /> */}
      <TabRouter />
      <ReferenceData />
    </div>
  );
}

export default App;
