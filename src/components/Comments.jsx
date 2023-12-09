import React from "react";
import Comment1 from "../assets/img/png/comment1.png";
import Comment2 from "../assets/img/png/comment2.png";
import Comment3 from "../assets/img/png/comment3.png";
import Comment4 from "../assets/img/png/comment4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Backbtn, Nextbtn } from "./Icons/Svg";

import Slider from "react-slick";
const Comments = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnFocus: true,
        },
      },
      {
        breakpoint: 866,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnFocus: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnFocus: true,
        },
      },
    ],
  };
  const first = React.useRef();
  return (
    <>
      <div className="mw_1140 mx-auto px_12 mb-lg-5 pb-5" id="comment">
        <h2
          className="text-md-start text-center text-black ff_josefin fs_xl fw-bold lh_normal mb-3"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Comments
        </h2>
        <div className="position-relative">
          <div
            className="position-absolute curser_pointer top-50 trtl_y"
            onClick={() => first.current.slickPrev()}
          >
            <Backbtn />
          </div>
          <Slider {...settings} ref={first}>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment1} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1 fw-semibold lh_120">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment2} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1 fw-semibold lh_120">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment3} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1 fw-semibold lh_120">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment4} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1 fw-semibold lh_120">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment4} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1 fw-semibold lh_120">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
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

export default Comments;
