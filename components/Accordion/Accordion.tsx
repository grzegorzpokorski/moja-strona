import { ReactNode } from "react";
import { AccordionItem } from "./parts/AccordionItem";

export type AccordionItemType = {
  heading: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItemType[];
  withMarginOnTop?: boolean;
  customId?: string;
};

export const Accordion = ({ items, withMarginOnTop, customId = "accordion" }: AccordionProps) => {
  return (
    <div
      className={`flex flex-col gap-4 mx-auto ${withMarginOnTop ? "mt-12 md:mt-24" : ""} accordion`}
      id={customId}
    >
      {items.map((item, idx) => (
        <AccordionItem key={item.heading} {...item} />
      ))}
    </div>
  );
};
