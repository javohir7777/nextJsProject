"use client";

import Link from "next/link";

import "./Header.scss";
import { useEffect, useState } from "react";
import { PicRightOutlined } from "@ant-design/icons";
import Navlink from "../shares/Navlink";
const Header = () => {
  const [bgHeader, setBgHeader] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const openHamburger = () => {
    setHamburger(!hamburger);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setBgHeader(true);
      } else {
        setBgHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="container sticky-top">
      <nav className={bgHeader ? "nav bg-dark" : "nav"}>
        <div className="nav-brand">
          <Navlink href="">Logo</Navlink>
          <PicRightOutlined
            className="antd-icon"
            onClick={() => openHamburger()}
          />
        </div>
        <div className={hamburger ? "nav-menu" : "nav-menu nav-menu__none"}>
          <Navlink href="/">Home</Navlink>
          <Navlink href="/about">Biz haqimizda</Navlink>
          <Navlink href="/product">Product</Navlink>
          {/* <Navlink href="/logout">Chiqish</Navlink> */}
          <Navlink href="/contact">Aloqa</Navlink>
          <Navlink href="/history">Buyrutma tarixi</Navlink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
