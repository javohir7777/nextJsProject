import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import "./NavLink.scss";

const Navlink = (props: { href: string; children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <Link
      {...props}
      className={
        pathName === props.href ? "active nav-menu__item" : "nav-menu__item"
      }
    >
      {props.children}
    </Link>
  );
};

export default Navlink;
