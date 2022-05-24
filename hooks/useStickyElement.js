import { useEffect, useCallback, useRef, useState } from "react";

const useStickyElement = (customOffset) => {
  const [isSticky, setStickiness] = useState(false);
  const [positionOnWhichStickinessIsApplied, setPosition] = useState(0);
  const elementToApplyStickiness = useRef(null);
  useEffect(() => {
    if (customOffset) {
      setPosition(customOffset);
    } else if (elementToApplyStickiness.current) {
      const bottomOfTheStickyElement =
        elementToApplyStickiness.current.getBoundingClientRect().bottom;
      setPosition(bottomOfTheStickyElement);
    }
  }, [customOffset]);
  const handleScroll = useCallback(() => {
    window.scrollY > positionOnWhichStickinessIsApplied
      ? setStickiness(true)
      : setStickiness(false);
  }, [positionOnWhichStickinessIsApplied]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return [isSticky, elementToApplyStickiness];
};

export default useStickyElement;
