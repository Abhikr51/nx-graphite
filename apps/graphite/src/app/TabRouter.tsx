import '../styles.css';
import ReferenceDataPage from "./ReferenceDataPage";
import { Route, Routes } from 'react-router-dom';
import AllTables from './AllTables';
import FavoriteTables from './FavoriteTables';
import MostCommonTables from './MostCommonTables';


export function TabRouter() {
  return (
    <Routes>
      <Route path="/data-processing" element={<ReferenceDataPage />}>
        <Route path="all-tables" element={<AllTables />} />
        <Route path="favorite-tables" element={<FavoriteTables />} />
        <Route path="most-common-tables" element={<MostCommonTables />} />
      </Route>
    </Routes>
  );
}

export default TabRouter;


