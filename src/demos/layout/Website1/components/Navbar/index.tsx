import React, { useMemo, useState } from "react";
import ss from "./index.module.css";
import { FaTypo3, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../../Navbar/Button";
import { useViewport } from "../../../responsive_layout/good/HooksAndContext";

const Navbar: React.FC<{
  menuItems: Array<{ path: string; name: string }>;
}> = ({ menuItems }) => {
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [desktopMode, setDesktopMode] = useState(true);
  const { width } = useViewport();

  useMemo(() => {
    if (width < 720) {
      setDesktopMode(false);
    } else {
      setDesktopMode(true);
    }
  }, [width]);

  return (
    <>
      <nav className={ss.container}>
        <h1>
          <Link to="/" className={ss.logo}>
            Travel <FaTypo3 />
          </Link>
        </h1>
        {!desktopMode && (
          <span
            className={ss.menuIcon}
            onClick={() => setMenuIconClicked((prev) => !prev)}
          >
            {menuIconClicked ? <FaTimes /> : <FaBars />}
          </span>
        )}
        <ul
          className={`${ss.menuItems} 
            ${!desktopMode && ss.menuItemsMobile} 
            ${menuIconClicked && ss.menuItemsMobileActive}`}
        >
          {menuItems.map((it) => (
            <li key={it.name} className={ss.menuItem}>
              <Link
                onClick={() => setMenuIconClicked(false)}
                to={it.path}
                className={ss.menuLink}
              >
                {it.name}
              </Link>
            </li>
          ))}
          <Button buttonStyle="btnOutline" buttonSize="btnPrimary">
            Sign up
          </Button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
