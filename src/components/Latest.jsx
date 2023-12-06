import React from "react";
import { Row, Col } from "react-bootstrap";
import latestpic from "../assets/img/png/latest_img.png";
const Latest = () => {
  return (
    <>
      <h2 className="text-center ff_josefin fs_xl text-black pb-5 fw-bold">
        Latest News
      </h2>
      <div className="mw_1140 mb-5 pb-5 mx-auto px_12">
        <Row className="pb-2 pt-4">
          <Col lg={4}>
            <div className="d-flex flex-column px-3 pt-3 latest_card">
              <img className="latest_pic" src={latestpic} alt="latestpic" />
              <p className="text-start dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex flex-column px-3 pt-3 latest_card">
              <img className="latest_pic" src={latestpic} alt="latestpic" />
              <p className="text-start dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex flex-column px-3 pt-3 latest_card">
              <img className="latest_pic" src={latestpic} alt="latestpic" />
              <p className="text-start dark_grey pt-4 mt-1 pb-5 mb-0 ff_josefin ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Latest;
