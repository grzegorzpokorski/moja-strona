import { ListItem } from "./parts/ListItem";
import { BoxesListItem } from "../../types/types";

type BoxesListProps = {
  items: BoxesListItem[];
  withMarginOnTop?: boolean;
};

export const BoxesList = ({ items, withMarginOnTop }: BoxesListProps) => {
  return (
    <ul
      className={`flex flex-col lg:grid md:grid-cols-2 xl:grid-cols-3 gap-6 ${
        withMarginOnTop ? "mt-12 md:mt-24" : ""
      }`}
    >
      {items && items.map((item, i) => <ListItem key={`list-item-${i}`} {...item} />)}
    </ul>
  );
};
