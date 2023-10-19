import Link from "next/link";

import "./Header.scss";
const Header = () => {
  return (
    <header className="container">
      <nav>
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
