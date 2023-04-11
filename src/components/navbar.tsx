import React, { useEffect } from "react";
import logo from "../assets/svg/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMenuClose } from "../hooks/useMenuClose";

function Navbar() {
  // const [menu, setMenu] = React.useState({ name: "Menu", isOpen: false });
  const menuClose = useMenuClose((state) => state.menuClose);
  const menuName = useMenuClose((state) => state.menuName);
  const setMenuClose = useMenuClose((state) => state.setMenuClose);
  const setMenuName = useMenuClose((state) => state.setMenuName);

  const nav = useNavigate();

  function toggleMenu() {
    if (menuClose) {
      setMenuClose(false);
      setMenuName("Close");
    } else {
      setMenuClose(true);
      setMenuName("Menu");
      nav(-1);
    }
  }
  function toggleMenuOther() {
    setMenuClose(true);
    setMenuName("Menu");
  }

  return (
    <div className="nav-container">
      <nav>
        <Link to="/menu" className="nav-links" onClick={() => toggleMenu()}>
          {" "}
          {menuName}
        </Link>
        <Link to="/" className="logo" onClick={() => toggleMenuOther()}>
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/Bell" className="nav-links" onClick={() => toggleMenuOther()}>
          Bell
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
