import React from "react";
import { Row, Col } from "react-bootstrap";
const Upcomming = () => {
  return (
    <>
      <div className="mw_1140 mb-lg-5 mt-lg-5 mx-auto px_12">
        <Row className="mb-lg-5 mt-xl-5 pb-5 pt-5">
          <Col md={6} className="pt-xl-5 pt-3">
            <div
              className="bg_upcomming px-xl-5 px-md-4 px-3 pt_43 pb-4 rounded-5"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h3 className="text-center text-white fw-bold ff_josefin fs_xl">
                Upcoming top nfts
              </h3>
              <p className="text-center fs_xsm lh_120 pt-3 ff_josefin mt-1 opacity_70 mb-0 mb-2 text-white fw-semibold">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <button className="ff_josefin mb-2 fw-semibold fs_xsm mx-auto scale_hover transition_300 mt-sm-5 mt-3 explore_btn bg-white text-center ">
                  Explore more
                </button>
              </div>
            </div>
          </Col>
          <Col md={6} className="pt-3  pt-xl-5">
            <div
              className="bg_upcomming2 pb-4 px-xl-5 px-md-4 px-3 pt_43 rounded-5"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h3 className="text-center text-white fw-bold ff_josefin fs_xl">
                Upcoming top nfts
              </h3>
              <p className="text-center fs_xsm lh_120 pt-3 mt-1 opacity_70 mb-0 mb-2 text-white fw-semibold">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <button className="ff_josefin scale_hover transition_300 mb-2 fw-semibold fs_xsm mx-auto mt-5 explore_btn bg-white text-center mt-5">
                  Explore more
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Upcomming;
