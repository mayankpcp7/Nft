import React from "react";
import img from "../assets/img/png/navlogo.png";
import twitter from "../assets/img/svg/twitter.svg";
import discord from "../assets/img/svg/discord.svg";
import telegram from "../assets/img/svg/telegram.svg";
import instagram from "../assets/img/svg/instagram.svg";
const Community = () => {
  return (
    <>
      <div className="mw_1140 mx-auto px_!2 mb-5 mt-md-5 mt-3 pb-md-5">
        <div
          className="d-md-flex align-items-center py-md-5 py-4 bg_community px-md-5 px-md-4 px-3 mx-2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img className="wh_193 my-2" src={img} alt="img" />
          <div className="d-flex flex-column ms-md-5 ps-3">
            <h4 className="text-white ff_josefin fs_xl mt-3 fw-bold">
              Join our community
            </h4>
            <p className="ff_josefin fw-semibold lh_120 fs_xsm color_community">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="d-flex justify-content-start pt-4 mt-2 mb-3 mb-md-0 align-items-center gap-3">
              <a href="" target="_blank">
                <img
                  className="transition_300 scale_hover"
                  src={twitter}
                  alt="twitter"
                />
              </a>
              <a href="" target="_blank">
                <img
                  className="transition_300 scale_hover"
                  src={discord}
                  alt="discord"
                />
              </a>
              <a href="" target="_blank">
                <img
                  className="transition_300 scale_hover"
                  src={instagram}
                  alt="instagram"
                />
              </a>
              <a href="" target="_blank">
                <img
                  className="transition_300 scale_hover"
                  src={telegram}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
