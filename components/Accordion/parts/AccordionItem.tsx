import { useEffect, useRef } from "react";
import slugify from "slugify";

export type AccordionItemType = {
  question: string;
  answer: JSX.Element;
};

type AccordionItemProps = {
  expanded: boolean;
  uniqueId: string;
  handleClickTrigger: () => void;
} & AccordionItemType;

const AccordionItem = ({
  question,
  answer,
  expanded,
  uniqueId,
  handleClickTrigger,
}: AccordionItemProps) => {
  const accordionContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded) {
      accordionContentRef;
      accordionContentRef.current!.style.maxHeight =
        accordionContentRef.current!.scrollHeight + "px";
    } else {
      accordionContentRef.current!.style.maxHeight = "0";
    }
  }, [expanded, accordionContentRef]);

  return (
    <div
      className={`flex flex-col bg-white dark:bg-zinc-900 shadow-md rounded accordion__item`}
    >
      <h3
        id={`${slugify(question, { lower: true })}__${uniqueId}`}
        className="text-customGray dark:text-zinc-200"
      >
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={`${uniqueId}-panel`}
          id={`${uniqueId}-button`}
          onClick={() => {
            handleClickTrigger();
            accordionContentRef.current!.classList.add(
              "transition-[max-height]",
            );
            accordionContentRef.current!.classList.add("duration-500");
          }}
          className={`w-full font-medium text-md text-left py-4 px-6 z-10 transition duration-300 rounded accordion__title ${
            expanded ? "rounded-b-none accordion__title--active" : ""
          }`}
        >
          <span>{question}</span>
        </button>
      </h3>
      <div
        id={`${uniqueId}-panel`}
        role="region"
        aria-labelledby={`${uniqueId}-button`}
        className={`accordion__content`}
        ref={accordionContentRef}
      >
        <div className={`prose dark:prose-invert max-w-none py-4 px-6`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
