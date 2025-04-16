import "../styles.css";
import AppHeader from "./components/AppHeader";
import Menubar from "./components/Menubar/Menubar"
// import DashBoardTable from "./components/DashBoardTable";
import ReferenceData from "./pages/ReferenceData";


export function App() {
  return (
    <div>
      <AppHeader />
      <Menubar/>
      <ReferenceData />
      {/* <DashBoardTable /> */}
    </div>
  );
}

export default App;
