import ListItem from "./parts/ListItem";

const PricingList = ({ items, withMarginOnTop }) => {
  return (
    <ul
      className={`flex flex-col md:flex-row gap-6 ${
        withMarginOnTop ? "mt-12 md:mt-24" : ""
      }`}
    >
      {items &&
        items.map((item, i) => <ListItem key={`list-item-${i}`} {...item} />)}
    </ul>
  );
};

export default PricingList;
