import React from "react";

import "./button.css";

export default function Button({ icon, name, classes, onClick }) {
  console.log(Button);
  return (
    <>
      <button className={`btn ${classes}`} onClick={onClick}>
        <span className="icon">{icon}</span>
        {name}
      </button>
    </>
  );
}
