import { useState, useRef, useEffect } from "react";
import slugify from "slugify";
import { AccordionItemType } from "../Accordion";

type AccordionItemProps = {
  expanded?: boolean;
} & AccordionItemType;

export const AccordionItem = ({ heading, content, expanded = false }: AccordionItemProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const uniqueId = slugify(heading, { lower: true });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (panelRef.current instanceof HTMLDivElement) {
      if (isExpanded) {
        panelRef.current.style.height = panelRef.current!.scrollHeight + "px";
      } else {
        panelRef.current.removeAttribute("style");
      }
    }
  }, [isExpanded]);

  return (
    <div className={`flex flex-col bg-white shadow-md rounded overflow-hidden`}>
      <h3>
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={`${uniqueId}-panel`}
          id={`${uniqueId}-button`}
          className={`flex flex-row justify-between w-full font-medium text-md text-left py-4 px-6 z-10 transition-colors motion-reduce:transition-none duration-300 rounded hover:bg-green hover:text-white ${
            isExpanded ? "bg-green text-white" : ""
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{heading}</span>
          <span className={`${isExpanded ? 'after:content-["-"]' : 'after:content-["+"]'}`} aria-hidden={true}></span>
        </button>
      </h3>
      <div
        id={`${uniqueId}-panel`}
        role="region"
        aria-labelledby={`${uniqueId}-button`}
        className={`transition-[height] duration-300 overflow-hidden h-0`}
        ref={panelRef}
      >
        <div className={`prose max-w-none py-4 px-6`}>{content}</div>
      </div>
    </div>
  );
};
