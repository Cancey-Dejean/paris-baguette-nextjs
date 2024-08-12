import { useEffect } from "react";

const useBodyOverflow = (mobileIsOpen: boolean) => {
  useEffect(() => {
    if (mobileIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileIsOpen]);
};

export default useBodyOverflow;
