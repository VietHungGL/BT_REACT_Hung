import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  // const {chilren,...data} = props;
  const { children, headerTitle, footerTitle } = props;
  return (
    <>
      <Header title={headerTitle} />
      {children}
      <Footer title={footerTitle} />
    </>
  );
}

export default Layout;
