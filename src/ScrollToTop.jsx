import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // hoặc "auto" nếu muốn cuộn tức thì
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
