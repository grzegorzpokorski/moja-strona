import { RefObject, useEffect } from "react";

const useOnClickAway = (ref: RefObject<Node>, action: (event: MouseEvent | TouchEvent) => void): void => {
  useEffect(() => {
    const handleAction = (event: MouseEvent | TouchEvent) => {
      if (event.target instanceof Node) {
        if (!ref.current || ref.current.contains(event.target)) return;
        action(event);
      }
    };

    document.addEventListener("mousedown", handleAction);

    return () => {
      document.removeEventListener("mousedown", handleAction);
    };
  }, [ref, action]);
};

export default useOnClickAway;
