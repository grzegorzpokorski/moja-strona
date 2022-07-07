import { useEffect, useRef } from "react";

const AccordionItem = ({
  question,
  answer,
  expanded,
  uniqueId,
  handleClickTrigger,
}) => {
  const accordionContentRef = useRef();

  useEffect(() => {
    if (expanded) {
      accordionContentRef;
      accordionContentRef.current.style.maxHeight =
        accordionContentRef.current.scrollHeight + "px";
    } else {
      accordionContentRef.current.style.maxHeight = null;
    }
  }, [expanded, accordionContentRef]);

  return (
    <div className={`flex flex-col bg-white shadow-md accordion__item`}>
      <h3>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={`${uniqueId}-panel`}
          id={`${uniqueId}-button`}
          onClick={handleClickTrigger}
          className={`w-full font-medium text-md text-left py-4 px-6 z-10 transition duration-300 accordion__title ${
            expanded ? "accordion__title--active" : ""
          }`}
        >
          <span>{question}</span>
        </button>
      </h3>
      <div
        id={`${uniqueId}-panel`}
        role="region"
        aria-labelledby={`${uniqueId}-button`}
        className={`transition-[max-height] duration-500 accordion__content`}
        ref={accordionContentRef}
      >
        <div className={`prose max-w-none py-4 px-6`}>{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
