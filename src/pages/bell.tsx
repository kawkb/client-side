import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBell } from "../hooks/useBell";

function Bell() {
  const setBellClose = useBell((state) => state.setBellClose);
  const setBellName = useBell((state) => state.setBellName);

  function toggleBell() {
    setBellClose(true);
    setBellName("BEll");
  }
  return (
    <div className="menu-container pattern-background green-pattern">
      <div className="retro-border-box light-box menu-box copy-book-background">
        <Link to="/" className="bell-links" onClick={() => toggleBell()}>
          Link to notification
        </Link>
      </div>
    </div>
  );
}

export default Bell;
