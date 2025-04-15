import '../styles.css';
import { Button, Card } from "@salt-ds/core";
export function App() {
  return (
    <div>
      <Button sentiment="accented" appearance="solid">Click me</Button>
      <Card style={{ width: "260px", height: "144px" }} />
    </div>
  );
}

export default App;


