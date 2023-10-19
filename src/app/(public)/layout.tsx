import PublicFooter from "@/container/footer/Footer";
import React from "react";
import childrenType from "@/types/childrenType";
import Header from "@/container/header/Header";

const Layout = ({ children }: childrenType) => {
  return (
    <>
      <Header />
      {children}
      <PublicFooter />
    </>
  );
};

export default Layout;
