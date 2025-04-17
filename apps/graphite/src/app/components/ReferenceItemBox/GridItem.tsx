import { Divider, FlowLayout, GridItem } from "@salt-ds/core";
import { EditIcon, FavoriteIcon, FavoriteSolidIcon } from "@salt-ds/icons";
import "./GridLayout.css";

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
    <GridItem key={key} className="itemWidth">
      <FlowLayout justify="space-between" padding={1}>
        <GridItem className="lableWidth">{text}</GridItem>
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
