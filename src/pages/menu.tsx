import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMenuClose } from "../hooks/useMenuClose";

function Menu() {
  // const menuClose = useMenuClose((state) => state.menuClose);
  // const menuName = useMenuClose((state) => state.menuName);
  const setMenuClose = useMenuClose((state) => state.setMenuClose);
  const setMenuName = useMenuClose((state) => state.setMenuName);

  function toggleMenu() {
    setMenuClose(true);
    setMenuName("Menu");
  }
  return (
    <div className="menu-container pattern-background green-pattern">
      <div className="retro-border-box light-box menu-box copy-book-background">
        <Link to="/" className="menu-links" onClick={() => toggleMenu()}>
          home
        </Link>
        <Link to="/profil" className="menu-links" onClick={() => toggleMenu()}>
          profil
        </Link>
        <Link to="/chat" className="menu-links" onClick={() => toggleMenu()}>
          chat
        </Link>
      </div>
    </div>
  );
}

export default Menu;
