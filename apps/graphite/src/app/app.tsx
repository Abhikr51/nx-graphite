import '../styles.css';
import { Button, Card } from "@salt-ds/core";
import TabRouter from './TabRouter';

export function App() {
  return (
    <div>
      <Button sentiment="accented" appearance="solid">Click me</Button>
      <Card style={{ width: "260px", height: "144px" }} />
      <TabRouter />
    </div>
  );
}

export default App;
