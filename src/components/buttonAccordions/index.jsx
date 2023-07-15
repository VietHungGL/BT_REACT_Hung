import React from "react";

import MullitipleOpen from "./mullitipleOpen";
import OpenAtTime from "./openAtTime";

export default function ButtonAccordions(props) {
  return (
    <div className="d-flex flex-row">
      <OpenAtTime className="me-5" />

      <MullitipleOpen />
    </div>
  );
}
