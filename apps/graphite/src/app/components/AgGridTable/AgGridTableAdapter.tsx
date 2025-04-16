import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { AgGridAdapterProps } from "../../types/AgGridTable.types";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const AgGridTableAdapter = <T,>({
  rowData,
  columnDefs,
  defaultColDef = { sortable: true, filter: true },
  pagination = true,
  paginationPageSize = 50,
}: AgGridAdapterProps<T>) => {
  const gridRef = useRef<AgGridReact>(null);

  return (
    <div className="ag-theme-quartz" style={{ height: "600px", width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        rowSelection="multiple"
        rowModelType="clientSide"
      />
    </div>
  );
};

export default AgGridTableAdapter;
