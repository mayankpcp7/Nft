import React from "react";
import { lookoutdata } from "./Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heart from "../assets/img/svg/heart.svg";
import Slider from "react-slick";
const Nftlooks = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1146,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mw_1140 mx-auto px_12 mt-5 pt-4">
        <h2 className="text-start text-black ff_josefin lh_normal fs_xl fw-bold">
          Top NFT to look out for in 2022
        </h2>
        <div className=" pt-xs-3 mt-5 d-flex align-items-center gap-1 overflow_xscroll">
       
            {lookoutdata.map((bonorum) => {
              return (
                <div className="d-flex flex-column nft_look py-3 px-2">
                  <img className="mw_207" src={bonorum.img} alt="bonorum pic" />
                  <h5 className="text-start text-black ff_josefin fs_md fw-semibold lh_normal pt-2 mb-0">
                    Bonorum Malorum
                  </h5>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="pt-2 ff_josefin fw-semibold fs_xsm">
                      $33,915
                    </p>
                    <div className="d-flex align-items-center">
                      <img src={heart} alt="heart" />
                      <p className="ff_josefin color_darkgrey mb-0 ps-1">915</p>
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
