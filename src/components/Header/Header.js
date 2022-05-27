import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <NavLink className="header-logo" to="/profile">
        <img
          className="header-logo"
          src="https://cdn-icons.flaticon.com/png/128/2518/premium/2518048.png?token=exp=1653408828~hmac=5aa5f5871d47af62e5b988be20f053c0"
          alt="logo"
        />
      </NavLink>
    </header>
  );
};

export default Header;
