import AccordionItem, { AccordionItemType } from "./parts/AccordionItem";
import { useState } from "react";

type AccordionType = {
  items: AccordionItemType[];
  withMarginOnTop?: boolean;
  id?: string;
};

const Accordion = ({
  items,
  withMarginOnTop,
  id = "accordion",
}: AccordionType) => {
  const [expandedItem, setExpandedItem] = useState<string>(items[0].question);

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
          expanded={expandedItem == item.question ? true : false}
          handleClickTrigger={() => {
            if (expandedItem != item.question) {
              setExpandedItem(item.question);
            } else {
              setExpandedItem("");
            }
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;
