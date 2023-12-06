import React, { useState } from "react";
// import { BackTop } from "./Icons/Svg";
import back from "../assets/img/png/back.png";
const BackToTop = () => {
  const [backTop, setBackTop] = useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <span
            onClick={moveToTop}
            className="position-fixed bottom-0 right-0 bg_light z_20 me-4 bottom-3 end-0  mb-4 cursor_pointer"
          >
            <img className="back_top" src={back} alt="back" />
          </span>
        ) : (
          ""
        )}
        <span></span>
      </div>
    </>
  );
};

export default BackToTop;
