import React from "react";
import { Row, Col } from "react-bootstrap";
import latestpic from "../assets/img/png/latest_img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Backbtn, Nextbtn } from "./Icons/Svg";

const Latest = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1146,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
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
   const first = React.useRef();
  return (
    <>
      <h2 className="text-center ff_josefin pt-5 fs_xl text-black pb-5 fw-bold">
        Latest News
      </h2>
      <div className="mw_1140 mb-5 pb-5 mx-auto px_12" id="latest">
        <div className="position-relative">
          <div
            className="position-absolute curser_pointer top-50 trtl_y"
            onClick={() => first.current.slickPrev()}
          >
            <Backbtn />
          </div>
          <Slider {...settings} ref={first} className="pb-2 pt-4">
            <div className="px-2">
              <div className="d-flex flex-column px-3 pt-3 latest_card">
                <img className="latest_pic" src={latestpic} alt="latestpic" />
                <p className="text-start dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="d-flex flex-column px-3 pt-3 latest_card">
                <img className="latest_pic" src={latestpic} alt="latestpic" />
                <p className="text-start dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                </p>
              </div>{" "}
            </div>
            <div className="px-2">
              <div className="d-flex flex-column px-3 pt-3 latest_card">
                <img className="latest_pic" src={latestpic} alt="latestpic" />
                <p className="text-start dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="d-flex flex-column px-3 pt-3 latest_card">
                <img className="latest_pic" src={latestpic} alt="latestpic" />
                <p className="text-start dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
          </Slider>
          <div
            className=" curser_pointer top-50 position-absolute right_n2 "
            onClick={() => first.current.slickNext()}
          >
            <Nextbtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;
