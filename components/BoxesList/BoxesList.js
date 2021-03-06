import ListItem from "./parts/ListItem";

const OfferList = ({ items, withMarginOnTop }) => {
  return (
    <ul
      className={`flex flex-col lg:grid md:grid-cols-2 xl:grid-cols-3 gap-6 ${
        withMarginOnTop ? "mt-12 md:mt-24" : ""
      }`}
    >
      {items &&
        items.map((item, i) => <ListItem key={`list-item-${i}`} {...item} />)}
    </ul>
  );
};

export default OfferList;
