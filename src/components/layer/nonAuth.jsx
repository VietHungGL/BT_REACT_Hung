import React from "react";

import Footer from "./footer";
import { Outlet } from "react-router-dom";

function NonAuthLayout(props) {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
      <Footer title="Đây là trang Đăng nhập" />
    </>
  );
}

export default NonAuthLayout;
