import React, { useState } from "react";
import { FaReact, FaTimes, FaBars } from "react-icons/fa";
import Button from "./Button";
import ss from "./index.module.css";

const menuItems = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Services",
    url: "#",
  },
  {
    title: "Products",
    url: "#",
  },
  {
    title: "Contact",
    url: "#",
  },
];

const NavBar: React.FC = () => {
  // menu button is clicked or not.
  const [clicked, setClicked] = useState(false);
  return (
    // 通过 字符串获取 css module 中的样式
    <nav className={ss[`container`]}>
      {/* title */}
      <h1 className={ss.title}>
        React
        <FaReact className={ss.titleIcon} />
      </h1>
      {/* menu button , only display in mobile mode */}
      <div className={ss.menuIcon} onClick={() => setClicked((prev) => !prev)}>
        {clicked ? <FaTimes /> : <FaBars />}
      </div>
      {/* menu items */}
      <ul className={`${ss.items} ${clicked && ss.itemsActive}`}>
        {menuItems.map((it) => (
          <li key={it.title}>
            <a href={it.url} className={ss.link}>
              {it.title}
            </a>
          </li>
        ))}
        <li>
          <Button
            type="button"
            buttonStyle="btnPrimary"
            buttonSize="btnMedium"
            onClick={() => {}}
          >
            Sign up
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
