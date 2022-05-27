import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const classActive = "nav-link_active";
  const navLink = "nav-link";

  return (
    <nav className="nav">
      <ul className="nav-list list-reset">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classActive}` : `${navLink}`
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classActive}` : `${navLink}`
            }
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classActive}` : `${navLink}`
            }
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classActive}` : `${navLink}`
            }
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classActive}` : `${navLink}`
            }
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
