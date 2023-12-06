import React from "react";
import { Row, Col } from "react-bootstrap";
import footerlogo from "../assets/img/png/navlogo.png";
import twitter from "../assets/img/svg/twitter.svg";
import discord from "../assets/img/svg/discord.svg";
import telegram from "../assets/img/svg/telegram.svg";
import instagram from "../assets/img/svg/instagram.svg";
const Footer = () => {
  return (
    <>
      <section className="bg-black">
        <div className="mw_1140 mx-auto px_12">
          <Row className="py-5 justify-content-between align-items-start">
            <Col lg={2} md={4} sm={10}>
              <img
                className="wh_134 pt-3 mb-4 mb-sm-0"
                src={footerlogo}
                alt="footerlogo"
              />
            </Col>
            <Col lg={6} md={8} sm={10} className="pt-4 pt-md-0">
              <h3 className="text-white fs_md text-md-center ff_josefin lh_normal mb-4 pb-1">
                Get the latest Rarible updates
              </h3>
              <div className="d-flex align-items-center justify-content-md-center rounded-5">
                <input
                  className="bg_grey footer_input px-4 py-2 mw_247 border_input"
                  type="mail"
                  placeholder="Email address"
                />
                <button className="subscribe fw-semibold text-black ff_josefin fs_sm">
                  SUBSCRIBE
                </button>
              </div>
              <div className="d-flex justify-content-md-center pt-4 mt-2 align-items-center gap-3">
                <a href="">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="">
                  <img src={discord} alt="discord" />
                </a>
                <a href="">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="">
                  <img src={telegram} alt="" />
                </a>
              </div>
            </Col>
            <Col lg={2} md={4} className="pt-4 pt-lg-0">
              <ul className="d-flex flex-column ps-lg-5 ms-2 ps-0">
                <li className="pb-3 mb-1">
                  <a
                    href="#"
                    className="ff_josefin text-start fw-medium fs_xsm footer_grey"
                  >
                    My Profile
                  </a>
                </li>
                <li className="pb-3 mb-1">
                  <a
                    href="#"
                    className="ff_josefin text-start fw-medium fs_xsm footer_grey"
                  >
                    Explore
                  </a>
                </li>
                <li className="pb-3 mb-1">
                  <a
                    href="#"
                    className="ff_josefin text-start fw-medium fs_xsm footer_grey"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_josefin text-start fw-medium fs_xsm footer_grey"
                  >
                    Activity
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <p className="text-center mb-0 ff_josefin fs_3xsm">© Copyright 2022 Destroyers of Fiat . All Rights Reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
