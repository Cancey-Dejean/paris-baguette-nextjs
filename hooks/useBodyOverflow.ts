import { useEffect } from "react";

const useBodyOverflow = (mobileIsOpen: boolean) => {
  useEffect(() => {
    if (mobileIsOpen) {
      document.body.classList.add("hide-overflow");
    } else {
      document.body.classList.remove("hide-overflow");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("hide-overflow");
    };
  }, [mobileIsOpen]);
};

export default useBodyOverflow;
