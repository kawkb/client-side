import React from "react";
import logo from "../assets/svg/logo.svg";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = React.useState({ name: "Menu", isOpen: false });

  const nav = useNavigate();
  function toggleMenu() {
    if (menu.isOpen) {
      setMenu({ name: "Close", isOpen: true });
      nav(-1);
    } else {
      setMenu({ name: "Close", isOpen: true });
    }
  }
  return (
    <div className="nav-container">
      <nav>
        <Link to="/menu" className="nav-links" onClick={() => toggleMenu()}>
          {" "}
          {menu.name}
        </Link>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/Bell" className="nav-links">
          Bell
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
