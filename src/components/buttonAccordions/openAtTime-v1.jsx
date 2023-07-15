import React, { useState } from "react";

import "./openAtTime.css";

const contentDefault =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat";

function OpenAtTime(props) {
  const [activeTab, setActiveTab] = useState("COMPLETE");

  const onClickTab = () => {
    setActiveTab("COMPLETE");
  };

  const onClickTab2 = () => {
    setActiveTab("PENDING");
  };

  const onClickTab3 = () => {
    setActiveTab("WAITING");
  };
  return (
    <>
      <div className="tab">
        <TabItem
          title="Simple Panels"
          content={contentDefault}
          isActive={activeTab === "COMPLETE"}
          onClick={onClickTab}
        />

        <TabItem
          title="Simple Panels"
          content={contentDefault}
          isActive={activeTab === "PENDING"}
          onClick={onClickTab2}
        />

        <TabItem
          title="Simple Panels"
          content={contentDefault}
          isActive={activeTab === "WAITING"}
          onClick={onClickTab3}
        />
      </div>
    </>
  );
}

export default OpenAtTime;

const TabItem = ({ title, content, isActive, onClick }) => {
  return (
    <>
      <div className="tab__item" onClick={onClick}>
        <div className={`tab__title ${isActive ? "tab__title--active" : ""}`}>
          {title}
        </div>

        {isActive && <div className="tab__content">{content}</div>}
      </div>
    </>
  );
};
{
  /* <div className="tab__item">
<div className="tab__title">Simple Panels</div>
<div className="tab__content">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat
</div>
</div> */
}
