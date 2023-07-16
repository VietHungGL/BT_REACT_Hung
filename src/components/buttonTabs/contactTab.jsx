import React, { useState } from "react";

import "./contactTab.css";

function ContactTab(props) {
  const [activeTab, setActiveTab] = useState("0");

  const onClickTab = (value) => {
    return () => setActiveTab(value);
  };

  return (
    <>
      <h2 className="py-3">BUTTON TABS</h2>
      <div className="d-flex">
        <BtnTab
          name="History"
          isActive={activeTab === "0"}
          onClick={onClickTab("0")}
        />
        <BtnTab
          name="AppRoach"
          isActive={activeTab === "1"}
          onClick={onClickTab("1")}
        />
        <BtnTab
          name="Culture"
          isActive={activeTab === "2"}
          onClick={onClickTab("2")}
        />
        <BtnTab
          name="Method"
          isActive={activeTab === "3"}
          onClick={onClickTab("3")}
        />
      </div>

      <div className="d-flex">
        <BtnContent
          des="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
          isActive={activeTab === "0"}
          onClick={onClickTab("0")}
        />
        <BtnContent
          des="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
          isActive={activeTab === "1"}
          onClick={onClickTab("1")}
        />
        <BtnContent
          des="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est."
          isActive={activeTab === "2"}
          onClick={onClickTab("2")}
        />
        <BtnContent
          des="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
          isActive={activeTab === "3"}
          onClick={onClickTab("3")}
        />
      </div>
    </>
  );
}

export default ContactTab;

const BtnTab = ({ name, isActive, onClick }) => {
  return (
    <>
      <li className="tab__item" onClick={onClick}>
        <div className={`tab__name  ${isActive ? "tab__name--active" : ""}`}>
          {name}
        </div>
      </li>
    </>
  );
};

const BtnContent = ({ des, isActive, onClick }) => {
  return (
    <>
      <li onClick={onClick}>
        <div className={` ${isActive ? "" : ""}`}></div>
      </li>
      <li>{isActive && <div className="tab__des">{des}</div>}</li>
    </>
  );
};
{
  /* <li>{isActive && <div className="tab__des">{des}</div>}</li> */
}
