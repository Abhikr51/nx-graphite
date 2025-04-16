import * as React from "react";
import NxWelcome from "./nx-welcome";
import { Route, Routes } from "react-router-dom";

const Graphite = React.lazy(() => import("graphite/Module"));

export function App() {
  return (
    <React.Suspense fallback={null}>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/graphite">Graphite</Link></li>
      </ul> */}

      <Routes>
        <Route path="/" element={<NxWelcome title="@photon/jpmc"/>} />
        <Route path="/graphite/*" element={<Graphite/>} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
