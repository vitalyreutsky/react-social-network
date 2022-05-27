import React from "react";

import DialogMessage from "./DialogMessage/DialogMessage";
import DialogItem from "./DialogItem/DialogItem";

import "./Dialogs.css";

const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialog-items person">
        <DialogItem name="Vitaly" id="1" />
        <DialogItem name="Anna" id="2" />
        <DialogItem name="Vitya" id="3" />
      </div>
      <div className="dialog-items message">
        <DialogMessage message="Hello" />
        <DialogMessage message="How are you?" />
      </div>
    </div>
  );
};

export default Dialogs;
