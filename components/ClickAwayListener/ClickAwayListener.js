import { useRef } from "react";
import useOnClickAway from "../../hooks/useOnClickAway";

const ClickAwayListener = ({ children, onClickAway }) => {
  const containerRef = useRef(null);
  useOnClickAway(containerRef, () => onClickAway());

  return <div ref={containerRef}>{children}</div>;
};

export default ClickAwayListener;
