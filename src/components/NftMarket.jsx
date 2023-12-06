import React from "react";
import boat from "../assets/img/svg/boat.svg";
import r from "../assets/img/svg/svg.svg";
import sr from "../assets/img/svg/superrare.svg";
import tr from "../assets/img/svg/triangle.svg";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Nextbtn, Backbtn } from "./Icons/Svg";
const NftMarket = () => {
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
      <div className="mw_1140 px_12 mx-auto mt-5 pt-4 pb-2" id="market">
        <h2 className="text-start fs_xl fw-bold mb-5 pb-3 ">
          Top NFT Market places
        </h2>
        <div className="position-relative">
          <div
            className="position-absolute curser_pointer top-50 trtl_y"
            onClick={() => first.current.slickPrev()}
          >
            <Backbtn />
          </div>
          <Slider className="mb-5 pb-5" {...settings} ref={first}>
            <Col lg={3}>
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={boat} alt="boat" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={r} alt="boat" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={sr} alt="boat" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={tr} alt="boat" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={tr} alt="boat" />
              </div>
            </Col>
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

export default NftMarket;
