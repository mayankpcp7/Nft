import { useState } from "react";
import { Nav } from "react-bootstrap";
import navlogo from "../assets/img/webp/navlogo.webp";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import searchicon from "../assets/img/svg/Dark/Icon.svg";
const MyNav = () => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <>
        <Nav className="py-1 bg-white mw_1140 mx-xl-auto w-100">
          <div className="container mw_1140 d-flex justify-content-between align-items-center">
            <div className="logo c_pointer">
              <img src={navlogo} alt="logo" className="w-75 w_lg_100" />
            </div>
            <ul className="d-lg-flex  mb-0 d-none d-block align-items-center list-unstyled">
              <div className="rounded-5 me-5 d-flex align-items-center border_grey">
                <img className="ps-1 ms-2" src={searchicon} alt="searchicion" />
                <input
                  className="border-0 rounded-5 nav_input w_160 py-1 outline_none "
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <li className="px-3">
                <a className="hover_black transition_300" href="you.com">My Profile</a>
              </li>
              <li className="px-3">
                <a className="hover_black transition_300" href="you.com">Explore</a>
              </li>
              <li className="px-3">
                <a className="hover_black transition_300" href="you.com">News</a>
              </li>
              <li className="px-3 me-2">
                <a className="hover_black transition_300" href="you.com">Activity</a>
              </li>
              <li className="ps-3 ms-4">
                <button className="sign_btn transition_300">SIGN IN</button>
              </li>
            </ul>
            <div
              className="d-flex justify-content-between flex-column d-lg-none menu_box z_index_100 position-relative z_50"
              onClick={showNav}
            >
              <h2 className="text-black fs_2xl">
                {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
              </h2>
            </div>
            <ul
              className={`d-flex gap-4 mb-0 bg-white sm_nav mb-0 ps-0 d-lg-none list-unstyled ${
                show ? "" : "start-0"
              }`}
            >
              <div className="rounded-5 d-flex align-items-center border_grey">
                <img className="ps-1 ms-2" src={searchicon} alt="searchicion" />
                <input
                  className="border-0 rounded-5 w_160 py-1 outline_none "
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <li className="px-3">
                <a className="hover_black transition_300" href="you.com">My Profile</a>
              </li>
              <li className="px-3">
                <a className="hover_black transition_300" href="you.com">Explore</a>
              </li>
              <li className="px-3">
                <a className="hover_black transition_300" href="you.com">News</a>
              </li>
              <li className="px-3">
                <a className="hover_black transition_300" href="you.com">Activity</a>
              </li>
              <li>
                <button className="sign_btn pt-1">SIGN IN</button>
              </li>
            </ul>
          </div>
        </Nav>
      </>
    </>
  );
};

export default MyNav;
