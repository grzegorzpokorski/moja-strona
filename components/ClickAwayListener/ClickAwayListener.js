import React, { useEffect, useRef } from "react";

const ClickAwayListener = ({ children, onClickAway }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleAction = (event) => {
      if (!containerRef.current || containerRef.current.contains(event.target))
        return;
      onClickAway();
    };

    document.addEventListener("mousedown", handleAction);
    document.addEventListener("touchstart", handleAction);

    return () => {
      document.removeEventListener("mousedown", handleAction);
      document.removeEventListener("touchstart", handleAction);
    };
  }, [containerRef, onClickAway]);

  return <div ref={containerRef}>{children}</div>;
};

export default ClickAwayListener;
