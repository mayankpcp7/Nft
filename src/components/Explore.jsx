import React from "react";
import { exploredata } from "./Helper";
import heart from "../assets/img/png/heart.png";
const Explore = () => {
  return (
    <>
      <div className="mw_1140 px-3 mx-auto mt-md-5 mt-3 pt-lg-4">
        <h2
          className="text-sm-start text-center ff_josefin fs_xl text-black fw-semibold pt-1 lh_normal pb-4 fw-bold"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Explore top NFT
        </h2>
        {exploredata.map((explore) => {
          return (
            <div
              className="d-flex flex-sm-row flex-column exploration px-3 py-3 px_29 py_20 mb-2 mt-1 pe-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                className="mh_211 ps-3 w_207 me-sm-4 object-fit-cover rounded-5 "
                src={explore.pic}
                alt="explorepic"
              />
              <div>
                <h5 className="ms-2 fs_lg ff_josefin text-black lh_normal pt-3 fw-semibold">
                  Bonorum Malorum
                </h5>
                <p className="mb-0 lh_120 ff_josefin mw_858 ms-2 fw-semibold">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
                  <p className="ff_josefin fw-semibold dark_grey fs_slg ms-2">
                    $33,915
                  </p>
                  <button className="ff_josefin fs_sm fw-semibold rounded-5 border_grey py-2 px-3 mt-3 lh_normal bg-transparent color_grey h_buy">
                    BUY NOW
                  </button>
                  <div className="d-flex align-items-center">
                    <img height={12} width={13} src={heart} alt="heart" />
                    <p className="ff_josefin dark_grey mb-0 ps-1 pe-3">915</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Explore;
