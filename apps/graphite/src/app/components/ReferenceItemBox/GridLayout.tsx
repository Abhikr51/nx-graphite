import { GridItem, GridLayout, NavigationItem } from "@salt-ds/core";
import GridItemText from "./GridItem";
import "./GridLayout.css";

interface GridItemTextProps {
  reference_table_name: string;
  is_favorite: boolean;
  editable: boolean;
  reference_table_id: string;
}
const GridHandlaer = ({
  active,
  handleActiveToggle,
  Label,
  data,
  columns = 10,
  rows = 1,
}: {
  active: boolean;
  handleActiveToggle: any;
  Label: string;
  data?: GridItemTextProps[];
  rows?: number;
  columns?: number;
}) => {
  return (
    <GridItem className="GridBox">
      <NavigationItem
        // href="/graphit"
        active={active}
        orientation="vertical"
        onClick={() => {
          handleActiveToggle();
        }}
      >
        {Label}
      </NavigationItem>
      <GridLayout columns={columns} rows={rows}>
        {data?.map((element: GridItemTextProps) => {
          console.log("filterData***", element)
          return (
            <GridItemText
              text={element?.reference_table_name}
              isFavourite={element?.is_favorite}
              isEditable={element?.editable}
              key={element?.reference_table_id}
            />
          );
        })}
      </GridLayout>
    </GridItem>
  );
};
export default GridHandlaer;
