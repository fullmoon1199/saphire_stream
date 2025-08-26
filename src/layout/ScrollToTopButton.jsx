// ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import up_arrow from "../assets/icon/up_arrow.svg";

export default function ScrollToTopButton({
  threshold = 200,           // 버튼 노출 시작 스크롤 높이
  right = 24, bottom = 24,   // 위치 여백(px)
  usePortal = true,
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const btn = (
    <button
      type="button"
      aria-label="go to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed z-[1000] rounded-full shadow-lg border
                  flex items-center justify-center
                  transition-all duration-200 ease-out
                  focus:outline-none
                  ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                  hover:bg-gray-100 active:scale-95`}
      style={{ right, bottom, width: 68, height: 68, background: "white" }}
    >
      <img
        src={up_arrow}
        alt="go to top"
        className="w-5 h-5 transition-transform duration-200"
      />
    </button>
  );

  return usePortal ? createPortal(btn, document.body) : btn;
}
