import React from "react";
import MyNav from "./MyNav";
import headerimg from "../assets/img/webp/header_img.webp";
const Header = () => {
  return (
    <>
      <div className="px-md-4 px-3 rounded-5">
        <MyNav />
        <div className="bg_header px-2 px-md-0  rounded-5 pb-2">
          <div className="d-flex flex-column justify-content-xxl-center rounded-5 h-100 align-items-center pb-1">
            <h1 className="text-center fs_xxl mb-0 text-white ff_playfair lh_normal fw-semibold pt-4 mt-1">
              "Best New NFT to look out for"
            </h1>
            <p className="text-center color_lightgrey fw-semibold fs_xsm ff_josefin mb-0 mb-3 lh_120 mw_652">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <img className="mt-xl-4 mt-2 me-1 mb-2 mw_240" src={headerimg} alt="headerimg" />
            <button className="join_btn fw-semibold ff_josefin  fs_sm rounded-5 bg-transparent my-xl-4 my-3">JOIN US</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
