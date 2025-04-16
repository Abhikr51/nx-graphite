import * as React from 'react';
import NxWelcome from "./nx-welcome";
import { Route, Routes } from 'react-router-dom';

const Graphite = React.lazy(() => import('graphite/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/graphite">Graphite</Link></li>
      </ul> */}
      
      <Routes>
        <Route path="/" element={<NxWelcome title="@photon/jpmc"/>} />
        <Route path="graphite/data-processing" element={<Graphite/>} />
        <Route path="graphite/*" element={<NxWelcome title="@photon/jpmc"/>} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
