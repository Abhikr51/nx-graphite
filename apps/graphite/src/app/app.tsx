import "../styles.css";
import AppHeader from "./components/AppHeader";
// import DashBoardTable from "./components/DashBoardTable";
import ReferenceData from "./pages/ReferenceData";

export function App() {
  return (
    <div>
      <AppHeader />
      {/* <DashBoardTable /> */}
      <ReferenceData />
    </div>
  );
}

export default App;
