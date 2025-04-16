import "../styles.css";
import AppHeader from "./components/AppHeader";
// import DashBoardTable from "./components/DashBoardTable";
import ReferenceData from "./pages/ReferenceData";


export function App() {
  return (
    <div>
      <AppHeader />
      <ReferenceData />
      {/* <DashBoardTable /> */}
    </div>
  );
}

export default App;
