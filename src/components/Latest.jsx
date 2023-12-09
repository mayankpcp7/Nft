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
        breakpoint: 1168,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnFocus: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnFocus: true,
          dots: true,
        },
      },
    ],
  };
   const first = React.useRef();
  return (
    <>
      <h2
        className="text-center ff_josefin pt-xl-4 mb-0 fs_xl text-black pb-xl-5 pb-md-3 pb-md-3 fw-bold"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        Latest News
      </h2>
      <div className="mw_1140 mb-lg-5 pb-5 mx-auto px_12" id="latest">
        <div className="position-relative">
          <div
            className="position-absolute z-3 curser_pointer top-50 trtl_y"
            onClick={() => first.current.slickPrev()}
          >
            <Backbtn />
          </div>
          <Slider {...settings} ref={first} className="pb-2 pt-4">
            <div className="px-2">
              <div className="d-flex flex-column px-3 pt-3 latest_card align-items-center align-items-xl-start mw_300">
                <img className="latest_pic" src={latestpic} alt="latestpic" />
                <p className="text-md-start text-center dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="d-flex flex-column px-3 pt-3 latest_card align-items-center align-items-xl-start mw_300">
                <img className="latest_pic" src={latestpic} alt="latestpic" />
                <p className="text-start dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                </p>
              </div>{" "}
            </div>
            <div className="px-2">
              <div className="d-flex flex-column px-3 pt-3 latest_card align-items-center align-items-xl-start mw_300">
                <img className="latest_pic" src={latestpic} alt="latestpic" />
                <p className="text-start dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="d-flex flex-column px-3 pt-3 latest_card align-items-center align-items-xl-start mw_300">
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
            className="z-3 curser_pointer top-50 position-absolute right_n2 "
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
