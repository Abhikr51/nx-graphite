import { Divider, FlowLayout, GridItem } from "@salt-ds/core";
import { EditIcon, FavoriteIcon, FavoriteSolidIcon } from "@salt-ds/icons";
interface GridItemTextProps {
  text: string;
  isFavourite: boolean;
  isEditable: boolean;
  key: string;
}
const GridItemText = ({
  text,
  isFavourite,
  isEditable,
  key,
}: GridItemTextProps) => {
  return (
    <GridItem key={key} style={{ width: "250px" }}>
      <FlowLayout justify="space-between" padding={1}>
        <GridItem
          style={{
            width: "60%",
          }}
        >
          {text}
        </GridItem>
        <FlowLayout>
          {isEditable && <EditIcon />}
          {isFavourite ? <FavoriteIcon /> : <FavoriteSolidIcon />}
        </FlowLayout>
      </FlowLayout>
      <Divider />
    </GridItem>
  );
};
export default GridItemText;
