import { ColDef } from "ag-grid-community";

export interface AgGridAdapterProps<T> {
  rowData: T[] | null;
  columnDefs: ColDef[];
  defaultColDef?: Partial<ColDef>; // Allow partial column config
  pagination?: boolean;
  paginationPageSize?: number;
}
