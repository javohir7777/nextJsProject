import React from "react";
import childrenType from "@/types/childrenType";
import Header from "@/components/header/Header";
import PublicFooter from "@/components/footer/Footer";

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
