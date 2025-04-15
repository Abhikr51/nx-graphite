import { ColDef } from "ag-grid-community";

const columnsConfig: { [key: string]: ColDef[] } = {
  dashBoardTable: [
    {
      headerName: "",
      field: "on",
      width: 70,
      flex: 1,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      pinned: "left",
      suppressHeaderMenuButton: true,
      suppressHeaderFilterButton: true,
      resizable: false,
      suppressColumnsToolPanel: true,
      filter: false,
      sortable: false,
    },
    {
      headerName: "Transaction ID",
      field: "transaction_id",
      filter: "agTextColumnFilter",
      sortable: true,
      editable: false,
      flex: 1,
    },
    {
      headerName: "Date",
      field: "date",
      filter: "agDateColumnFilter",
      sortable: true,
      editable: true,
      flex: 1,
    },
    {
      headerName: "Customer ID",
      field: "customer_id",
      filter: "agTextColumnFilter",
      sortable: true,
      editable: false,
      flex: 1,
    },
    {
      headerName: "Amount",
      field: "amount",
      filter: "agNumberColumnFilter",
      sortable: true,
      editable: true,
      cellClass: ["numeric-cell", "editable-cell"],
      flex: 1,
    },
    {
      headerName: "Type",
      field: "type",
      filter: "agTextColumnFilter",
      sortable: true,
      editable: false,
      flex: 1,
    },
    {
      headerName: "Description",
      field: "description",
      filter: "agTextColumnFilter",
      sortable: true,
      editable: false,
      flex: 1,
    },
  ],
  reviewTable: [
    // Define columns for Table 2
  ],
};

export const getColumnsConfig = (tableName: string): ColDef[] => {
  return columnsConfig[tableName] || [];
};
