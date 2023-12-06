import React from "react";
import NftCategory from "./NftCategory";
import { Tabs, Tab } from "react-bootstrap";
const NftTab = () => {
  return (
    <>
      <div className="mw_1140 mx-auto px_12">
        <h2 className="text-center ff_josefin fw-bold fs_xl">
          Top NFT by Category
        </h2>
        <p className="text-center mb-5 pb-3 mw_858 mx-auto lh_120 color_tab ff_josefin fw-semibold fs_xsm">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </p>

        <div className="d-flex flex-column pt-lg-5 mt-3 gap-4 ">
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-5"
          >
            <Tab eventKey="home" title="Sport">
              <NftCategory />
            </Tab>
            <Tab eventKey="profile" title="Art">
              <NftCategory />
            </Tab>
            <Tab eventKey="contact" title="Music">
              <NftCategory />
            </Tab>
            <Tab eventKey="fourth" title="Fashion">
              <NftCategory />
            </Tab>
            <Tab eventKey="fifth" title="Memes">
              <NftCategory />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default NftTab;
