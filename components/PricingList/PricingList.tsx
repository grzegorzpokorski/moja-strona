import { ListItem } from "./parts/ListItem";
import { PricingListItemType } from "./parts/ListItem";

type PricingLlistProps = {
  items: PricingListItemType[];
  withMarginOnTop?: boolean;
};

export const PricingList = ({ items, withMarginOnTop }: PricingLlistProps) => {
  return (
    <ul className={`flex flex-col md:flex-row gap-6 ${withMarginOnTop ? "mt-12 md:mt-24" : ""}`}>
      {items && items.map((item, i) => <ListItem key={`list-item-${i}`} {...item} />)}
    </ul>
  );
};
