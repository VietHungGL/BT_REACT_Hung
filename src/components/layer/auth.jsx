import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";

function AuthLayout(props) {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
