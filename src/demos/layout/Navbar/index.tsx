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
  const [clicked, setClicked] = useState(false);
  return (
    <nav className={ss[`container`]}>
      <h1 className={ss.title}>
        React
        <FaReact className={ss.titleIcon} />
      </h1>
      <div className={ss.menuIcon} onClick={() => setClicked((prev) => !prev)}>
        {clicked ? <FaTimes /> : <FaBars />}
      </div>
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
