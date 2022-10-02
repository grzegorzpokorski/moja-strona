import { ListItem } from "./parts/ListItem";
import { BoxesListItem } from "../../types/types";
import cn from "classnames";

type BoxesListProps = {
  items: BoxesListItem[];
  withMarginOnTop?: boolean;
};

export const BoxesList = ({ items, withMarginOnTop }: BoxesListProps) => {
  return (
    <ul
      className={cn("flex flex-col lg:grid md:grid-cols-2 xl:grid-cols-3 gap-6", {
        "mt-12 md:mt-24": withMarginOnTop,
      })}
    >
      {items && items.map((item, i) => <ListItem key={`list-item-${i}`} {...item} />)}
    </ul>
  );
};
