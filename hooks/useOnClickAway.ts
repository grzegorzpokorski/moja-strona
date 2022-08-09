import { RefObject, useEffect } from "react";

const useOnClickAway = (
  ref: RefObject<HTMLElement>,
  action: () => void,
): void => {
  useEffect(() => {
    const handleAction = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement))
        return;
      action();
    };

    document.addEventListener("mousedown", handleAction);

    return () => {
      document.removeEventListener("mousedown", handleAction);
    };
  }, [ref, action]);
};

export default useOnClickAway;
