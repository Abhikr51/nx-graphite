import AgGridTableWrapper from "./AgGridTable/AgGridTableWrapper";
import { getColumnsConfig } from "../config/columnsConfig";
import { dashboardData, DashboardRowData } from "../data/dashboardData";

const DashBoardTable = () => {
  return (
    <div>
      <h1>Transaction Table</h1>
      <AgGridTableWrapper<DashboardRowData>
        rowData={dashboardData}
        columnDefs={getColumnsConfig("dashBoardTable")}
        pagination
        paginationPageSize={100}
      />
    </div>
  );
};

export default DashBoardTable;
