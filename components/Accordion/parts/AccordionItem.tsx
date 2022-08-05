import { FC, useEffect, useRef } from 'react';
import slugify from 'slugify';

import { FAQItem } from './../../../types/content';

type AccordionItemType = {
  expanded: boolean;
  uniqueId: string;
  handleClickTrigger: () => void;
} & FAQItem;

const AccordionItem: FC<AccordionItemType> = ({ question, answer, expanded, uniqueId, handleClickTrigger }) => {
  const accordionContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded) {
      accordionContentRef;
      accordionContentRef.current.style.maxHeight = accordionContentRef.current.scrollHeight + 'px';
    } else {
      accordionContentRef.current.style.maxHeight = null;
    }
  }, [expanded, accordionContentRef]);

  return (
    <div className={`flex flex-col bg-white shadow-md rounded accordion__item`}>
      <h3 id={`${slugify(question, { lower: true })}__${uniqueId}`} className="text-customGray">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={`${uniqueId}-panel`}
          id={`${uniqueId}-button`}
          onClick={() => {
            handleClickTrigger();
            accordionContentRef.current.classList.add('transition-[max-height]');
            accordionContentRef.current.classList.add('duration-500');
          }}
          className={`w-full font-medium text-md text-left py-4 px-6 z-10 transition duration-300 rounded accordion__title ${
            expanded ? 'rounded-b-none accordion__title--active' : ''
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
        <div className={`prose max-w-none py-4 px-6`}>{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
