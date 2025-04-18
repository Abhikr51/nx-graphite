import AgGridTableAdapter from "./AgGridTableAdapter";
import { AgGridAdapterProps } from "../../types/AgGridTable.types";

// to add extra logic (e.g., additional configuration, state management, logging).
const AgGridTableWrapper = <T,>(props: AgGridAdapterProps<T>) => {
  return <AgGridTableAdapter {...props} />;
};

export default AgGridTableWrapper;
