import React, { useState } from "react";

import "./openAtTime.css";

const contentDefault =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat";

function MullitipleOpen(props) {
  return (
    <>
      <div className="tab">
        <h3>MULTIPLE OPEN</h3>
        <TabItem title="Simple Panels" content={contentDefault} />

        <TabItem title="Simple Panels" content={contentDefault} />

        <TabItem title="Simple Panels" content={contentDefault} />
      </div>
    </>
  );
}

export default MullitipleOpen;

const TabItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const onToggle = () => {
    setIsActive((a) => !a);
  };
  return (
    <>
      <div className="tab__item" onClick={onToggle}>
        <div className={`tab__title ${isActive ? "tab__title--active" : ""}`}>
          {title}
        </div>

        {isActive && <div className="tab__content">{content}</div>}
      </div>
    </>
  );
};
