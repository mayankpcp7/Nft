import React from "react";
import Comment1 from "../assets/img/png/comment1.png";
import Comment2 from "../assets/img/png/comment2.png";
import Comment3 from "../assets/img/png/comment3.png";
import Comment4 from "../assets/img/png/comment4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Comments = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // dots: false,
    // arrows: true,
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
  return (
    <>
      <div className="mw_1140 mx-auto px_12 mb-5 pb-5">
        <h2 className="text-start text-black ff_josefin fs_xl fw-semibold lh_normal mb-3">
          Comments
        </h2>
        {/* <Slider {...settings}> */}
          <div className="d-flex justify-content-between pt-4">
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment1} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment2} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment3} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment4} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            {/* <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment1} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment2} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment3} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
            <div className="d-flex flex-column align-items-start comment_card ps-2 pe-3 pt-3">
              <img className="wh_comment ps-1" src={Comment4} alt="comment" />
              <h5 className="ff_josefin fs_3xsm comment_grey fw-semibold pt-1 ps-1">
                1 year ago . 2 comments
              </h5>
              <p className="fs_3xsm ff_josefin mw_215 ps-1 mb-2 pb-1 dark_grey pt-1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div> */}
          </div>
        {/* </Slider> */}
      </div>
    </>
  );
};

export default Comments;
