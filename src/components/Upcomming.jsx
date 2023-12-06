import React from "react";
import { Row, Col } from "react-bootstrap";
const Upcomming = () => {
  return (
    <>
      <div className="mw_1140 mb-5 mx-auto px_12">
        <Row className="mb-5 pb-5">
          <Col md={6}>
            <div className="bg_upcomming py-5 px-5 rounded-5">
              <h3 className="text-center text-white fw-bold ff_josefin fs_xl">Upcoming top nfts</h3>
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
                <button className="ff_josefin fw-semibold fs_xsm mx-auto mt-5 explore_btn bg-white text-center mt-5">Explore more</button>
              </div>
            </div>
          </Col>
          <Col md={6} className="pt-3 pt-md-0">
            <div className="bg_upcomming2 py-5 px-5 rounded-5">
              <h3 className="text-center text-white fw-bold ff_josefin fs_xl">Upcoming top nfts</h3>
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
                <button className="ff_josefin fw-semibold fs_xsm mx-auto mt-5 explore_btn bg-white text-center mt-5">Explore more</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Upcomming;
