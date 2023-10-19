"use client";

import Link from "next/link";

import "./Header.scss";
import { useEffect, useState } from "react";
import { log } from "console";
const Header = () => {
  const [bgHeader, setBgHeader] = useState(false);

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
          <Link href="">Logo</Link>
        </div>
        <div className="nav-menu">
          <Link href="/">Home</Link>
          <Link href="/about">Biz haqimizda</Link>
          <Link href="/contact">Aloqa</Link>
          <Link href="/history">Buyrutma tarixi</Link>
          <Link href="/logout">Chiqish</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
