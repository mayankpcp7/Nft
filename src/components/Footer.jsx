import React from "react";
import { Row, Col } from "react-bootstrap";
import footerlogo from "../assets/img/webp/header_img.webp";
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
                className="wh_134 mt-lg-3 mb-4 mb-sm-0"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src={footerlogo}
                alt="footerlogo"
              />
            </Col>
            <Col lg={6} md={8} sm={10} className="pt-4 pt-md-0">
              <h3
                className="text-white fs_md text-md-center ff_josefin lh_normal mb-4 pb-1"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Get the latest Rarible updates
              </h3>
              <div className="d-sm-flex align-items-center justify-content-md-center rounded-5">
                <input
                  className="bg_grey footer_grey footer_input px-4 py-2 mw_247 border_input"
                  data-aos="fade-up"
                  data-aos-offset="400"
                  data-aos-easing="ease-in-sine"
                  type="mail"
                  placeholder="Email address"
                />
                <button
                  className="subscribe fw-semibold text-black pt-1 ff_josefin fs_sm"
                  data-aos="fade-down"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  SUBSCRIBE
                </button>
              </div>
              <div className="d-flex justify-content-md-center pt-4 mt-2 align-items-center gap-3">
                <a href="" target="_blank">
                  <img
                    className="scale_hover transition_300"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    src={twitter}
                    alt="twitter"
                  />
                </a>
                <a href="" target="_blank">
                  <img
                    data-aos="fade-up"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine"
                    className="scale_hover transition_300"
                    src={discord}
                    alt="discord"
                  />
                </a>
                <a href="/" target="_blank">
                  <img
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    className="scale_hover transition_300"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
                <a href="" target="_blank">
                  <img
                    data-aos="fade-right"
                    data-aos-offset="600"
                    data-aos-easing="ease-in-sine"
                    className="scale_hover transition_300"
                    src={telegram}
                    alt=""
                  />
                </a>
              </div>
            </Col>
            <Col lg={2} md={4} className="pt-4 pt-lg-0">
              <ul className="d-flex flex-column ps-lg-5 ms-2 ps-0">
                <li className="pb-3 mb-1">
                  <a
                    target="_blank"
                    href="#"
                    className="ff_josefin hover_white transition_300 text-start fw-medium fs_xsm footer_grey"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    My Profile
                  </a>
                </li>
                <li className="pb-3 mb-1">
                  <a
                    target="_blank"
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine"
                    href="#"
                    className="ff_josefin hover_white text-start transition_300 fw-medium fs_xsm footer_grey"
                  >
                    Explore
                  </a>
                </li>
                <li className="pb-3 mb-1">
                  <a
                    target="_blank"
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    href="#"
                    className="ff_josefin transition_300 text-start hover_white fw-medium fs_xsm footer_grey"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    data-aos="fade-right"
                    data-aos-offset="600"
                    data-aos-easing="ease-in-sine"
                    href="#"
                    className="ff_josefin text-start hover_white transition_300 fw-medium fs_xsm footer_grey"
                  >
                    Activity
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <p
            className="text-center pb-3 color_80 mb-0 ff_josefin fs_3xsm"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
          >
            © Copyright 2022 Destroyers of Fiat . All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
