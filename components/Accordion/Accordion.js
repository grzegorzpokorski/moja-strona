import AccordionItem from "./parts/AccordionItem";
import { useState } from "react";

const Accordion = ({ items, withMarginOnTop, id = "accordion" }) => {
  const [expanded, setExpanded] = useState(items[0].question);

  return (
    <div
      className={`flex flex-col gap-4 mx-auto ${
        withMarginOnTop ? "mt-12 md:mt-24" : ""
      } accordion`}
      id={id}
    >
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          {...item}
          uniqueId={`${id}-${i}`}
          expanded={expanded == item.question ? true : false}
          handleClickTrigger={() => {
            if (expanded != item.question) {
              setExpanded(item.question);
            } else {
              setExpanded(false);
            }
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;
