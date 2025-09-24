import React, { createContext, useEffect, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isShowing]);
  return (
    <ModalContext.Provider value={{ setIsShowing, setContent }}>
      {children}
      {isShowing && (
        <div
          onClick={() => setIsShowing(false)}
          className="fixed inset-0 bg-slate-600/50 h-full z-20 text-white"
        >
          <div className="absolute bg-slate-900 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-2/3">
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
export { ModalContext };
export default ModalProvider;
