import React from "react";
import { lookoutdata } from "./Helper";
import heart from "../assets/img/png/heart.png";

const Nftlooks = () => {
  return (
    <>
      <div className="mw_1140 mx-auto px_12 mt-5 pt-sm-4">
        <h2
          className="text-sm-start text-center pt-3 text-black ff_josefin lh_normal fs_xl fw-bold"
          data-aos="fade-right"
          data-aos-duration="1700"
        >
          Top NFT to look out for in 2022
        </h2>
        <div className=" pt-xs-3 mt-xl-5 mt-3 d-flex align-items-center gap-1 overflow_xscroll pb-md-2">
          {lookoutdata.map((bonorum) => {
            return (
              <div
                className="d-flex flex-column nft_look py-3 px_look"
                data-aos="flip-right"
                data-aos-duration="2000"
              >
                <img className="mw_207" src={bonorum.img} alt="bonorum pic" />
                <h5 className="text-start text-black ff_josefin fs_md fw-semibold lh_normal pt-2 mb-0">
                  Bonorum Malorum
                </h5>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="pt-2 ff_josefin fw-semibold fs_xsm">$33,915</p>
                  <div className="d-flex align-items-center">
                    <img height={12} width={13} src={heart} alt="heart" />
                    <p className="ff_josefin dark_grey mb-0 ps-1">915</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="ff_josefin fs_sm fw-semibold rounded-5 border_grey py-2 px-3 lh_normal bg-transparent color_grey h_buy">
                    BUY NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Nftlooks;
