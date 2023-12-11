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
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnFocus: true,
          dots: true,
        },
      },
      {
        breakpoint: 843,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnFocus: true,
          dots: true,
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
          dots: true,
        },
      },
    ],
  };
  const first = React.useRef();
  return (
    <>
      <div className="mw_1140 px_12 mx-auto mt-5 mb-5 mb-lg-0 pt-md-4 pb-2" id="market">
        <h2
          className="text-sm-start ff_josefin text-black text-center fs_xl fw-bold mb-sm-5 mb-3 pb-lg-3 "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Top NFT Market places
        </h2>
        <div className="position-relative">
          <div
            className="position-absolute curser_pointer top-50 trtl_y pb_12"
            onClick={() => first.current.slickPrev()}
          >
            <Backbtn />
          </div>
          <Slider className="mb-lg-5 pb-xl-5" {...settings} ref={first}>
            <Col lg={3} data-aos="flip-down" data-aos-suration="2200">
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={boat} alt="boat" />
              </div>
            </Col>
            <Col lg={3} data-aos="flip-down" data-aos-suration="2500">
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={r} alt="boat" />
              </div>
            </Col>
            <Col lg={3} data-aos="flip-down" data-aos-suration="2700">
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={sr} alt="boat" />
              </div>
            </Col>
            <Col lg={3} data-aos="flip-down" data-aos-suration="2900">
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={tr} alt="boat" />
              </div>
            </Col>
            <Col lg={3} data-aos="flip-down" data-aos-suration="3100">
              <div className="d-flex bg_market  justify-content-center align-items-center ">
                <img src={tr} alt="boat" />
              </div>
            </Col>
          </Slider>
          <div
            className=" curser_pointer top-50 position-absolute right_n2 pb_12"
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
