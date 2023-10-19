"use client";

import Link from "next/link";

import "./Header.scss";
import { useEffect, useState } from "react";
import { PicRightOutlined } from "@ant-design/icons";
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

  console.log(hamburger);

  return (
    <header className="container sticky-top">
      <nav className={bgHeader ? "nav bg-dark" : "nav"}>
        <div className="nav-brand">
          <Link href="">Logo</Link>
          <PicRightOutlined
            className="antd-icon"
            onClick={() => openHamburger()}
          />
        </div>
        <div className={hamburger ? "nav-menu" : "nav-menu nav-menu__none"}>
          <Link className="nav-menu__item" href="/">
            Home
          </Link>
          <Link className="nav-menu__item" href="/about">
            Biz haqimizda
          </Link>
          <Link className="nav-menu__item" href="/contact">
            Aloqa
          </Link>
          <Link className="nav-menu__item" href="/history">
            Buyrutma tarixi
          </Link>
          <Link className="nav-menu__item" href="/logout">
            Chiqish
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
