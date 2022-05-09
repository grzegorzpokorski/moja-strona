import ListItem from "./parts/ListItem";

const OfferList = ({ items, withMarginTop }) => {
  return (
    <ul
      className={`flex flex-col lg:grid md:grid-cols-2 xl:grid-cols-3 gap-6 ${
        withMarginTop && "mt-12 md:mt-24"
      }`}
    >
      {items &&
        items.map((item, i) => <ListItem key={`list-item-${i}`} {...item} />)}
    </ul>
  );
};

export default OfferList;
