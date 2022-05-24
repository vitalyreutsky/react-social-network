import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list list-reset">
        <li className="nav-item">
          <a className="nav-link nav-link_active" href="/profile">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/messages">
            Messages
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/news">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/music">
            Music
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
