import { GridItem, GridLayout, NavigationItem } from "@salt-ds/core";
import GridItemText from "./GridItem";
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
    <GridItem
      style={{
        padding: "8px",
        border: "2px solid rgba(0, 0, 0, 0.4)",
        borderRadius: "4px",
      }}
    >
      <NavigationItem
        href="/home"
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
