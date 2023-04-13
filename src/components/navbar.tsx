import React, { useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMenuClose } from "../hooks/useMenuClose";
import { useBell } from "../hooks/useBell";
import api from "../api/api";

function Navbar() {
  // const [menu, setMenu] = React.useState({ name: "Menu", isOpen: false });
  const menuClose = useMenuClose((state) => state.menuClose);
  const menuName = useMenuClose((state) => state.menuName);
  const setMenuClose = useMenuClose((state) => state.setMenuClose);
  const setMenuName = useMenuClose((state) => state.setMenuName);
  const setBellNbr = useBell((state) => state.setBellNbr);
  const bellNbr = useBell((state) => state.bellNbr);

  const bellClose = useBell((state) => state.bellClose);
  const bellName = useBell((state) => state.bellName);
  const setBellClose = useBell((state) => state.setBellClose);
  const setBellName = useBell((state) => state.setBellName);
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

  function toggleBell() {
    if (bellClose) {
      setBellClose(false);
      setBellName("Close");
    } else {
      setBellClose(true);
      setBellName(`Bell(${bellNbr})`);
      nav(-1);
    }
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
        <Link to="/Bell" className="nav-links" onClick={() => toggleBell()}>
          {bellName}
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
