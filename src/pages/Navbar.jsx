import React from "react";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar__section">
      <img
        className="navbar__logo"
        src={
          "https://www.seekpng.com/png/full/83-835228_fscheck-by-kurt-random-logo-png.png"
        }
        alt="logo"
      />
      <p className="navebar__signin__button">Sign in</p>
    </div>
  );
}

export default Navbar;
