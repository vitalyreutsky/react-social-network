import React from "react";
import { NavLink } from "react-router-dom";

import "./Dialogs.css";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialog-items person">
        <div className="person-item">
          <NavLink className="person-item__link" to="#">
            Vitaly
          </NavLink>
        </div>
        <div className="person-item">
          <NavLink className="person-item__link" to="#">
            Vitya
          </NavLink>
        </div>
        <div className="person-item">
          <NavLink className="person-item__link" to="#">
            Anna
          </NavLink>
        </div>
        <div className="person-item">
          <NavLink className="person-item__link" to="#">
            Katya
          </NavLink>
        </div>
        <div className="person-item">
          <NavLink className="person-item__link" to="#">
            Tolya
          </NavLink>
        </div>
      </div>
      <div className="dialog-items message">
        <div className="message-item">
          <p className="message-text">Hi</p>
        </div>
        <div className="message-item">
          <p className="message-text">How are you?</p>
        </div>
        <div className="message-item">
          <p className="message-text">Go!</p>
        </div>
        <div className="message-item">
          <p className="message-text">Nice to meet you</p>
        </div>
        <div className="message-item">
          <p className="message-text">Great</p>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
