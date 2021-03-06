import { useEffect } from "react";

const useOnClickAway = (ref, action) => {
  useEffect(() => {
    const handleAction = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      action();
    };

    document.addEventListener("mousedown", handleAction);

    return () => {
      document.removeEventListener("mousedown", handleAction);
    };
  }, [ref, action]);
};

export default useOnClickAway;
