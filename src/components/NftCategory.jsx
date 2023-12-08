import React from "react";
import heart from "../assets/img/png/heart.png";
import { Categorydata } from "./Helper";
import { Row, Col } from "react-bootstrap";
const NftCategory = () => {
  return (
    <>
      <div className="mw_1140 mx-auto px_12">
        <Row className="justify-content-center">
          {Categorydata.map((Category) => {
            return (
              <Col lg={3} md={4} sm={5} xs={10}>
                <div
                  className="d-flex align_items_center  category_card flex-column px-3 pb-3 mb-3 mt-2 short_scale transition_300"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <p className="text-start ff_josefin text-black pt-3 fs_sm mb-0 pb-2 fw-medium">
                    {Category.rank}
                  </p>
                  <img
                    className="category_hw"
                    src={Category.cimg}
                    alt="categoryimg"
                  />
                  <h5 className="text-start ff_josefin mt-3 pt-1 fs_md fw-semibold">
                    Bonorum Malorum
                  </h5>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="ff_josefin dark_grey fw-semibold mb-0">
                      $33,915
                    </p>
                    <div className="d-flex align-items-center">
                      <img height={12} width={13} src={heart} alt="heart" />
                      <p className="ff_josefin dark_grey mb-0 ps-1">915</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button className="ff_josefin fs_sm fw-semibold rounded-5 border_grey py-2 px-3 lh_normal bg-transparent color_grey h_buy">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="d-flex pt-2 justify-content-center align-items-center">
          <button className="ff_josefin scale_hover transition_300 fw-semibold fs_sm text-white text-center mt-4 bg-black rounded-5 hw_view">
            View more
          </button>
        </div>
      </div>
    </>
  );
};

export default NftCategory;
