import Item from "./parts/Item";

const Accordion = ({ items, withMarginOnTop, customClasses, dataName }) => {
  return (
    <div
      className={`flex flex-col gap-4 w-full md:w-8/12 mx-auto ${
        withMarginOnTop ? "mt-12 md:mt-24" : ""
      } ${customClasses}`}
    >
      {items && items.map((item) => <Item key={item.question} {...item} />)}
    </div>
  );
};

export default Accordion;
