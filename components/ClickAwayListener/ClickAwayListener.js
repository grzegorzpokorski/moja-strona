import React, { useRef } from "react";
import useOnClickAway from "../../hooks/useOnClickAway";

const ClickAwayListener = ({ children, onClickAway }) => {
  const ref = useRef(null);
  useOnClickAway(ref, () => onClickAway());

  if (React.Children.count(children) == 1) {
    const copyWithRef = React.cloneElement(children, { ref: ref });
    return <React.Fragment>{copyWithRef}</React.Fragment>;
  }

  return <div ref={ref}>{children}</div>;
};

export default ClickAwayListener;
