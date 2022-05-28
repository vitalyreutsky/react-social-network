import React from "react";

import DialogMessage from "./DialogMessage/DialogMessage";
import DialogItem from "./DialogItem/DialogItem";

import "./Dialogs.css";

const Dialogs = (props) => {
  const dialogItem = props.dialogs.map((el) => {
    return <DialogItem name={el.name} key={el.key} id={el.key} />;
  });

  const messageItem = props.messages.map((el) => {
    return <DialogMessage message={el.message} key={el.key} id={el.key} />;
  });

  return (
    <div className="dialogs">
      <div className="dialog-items person">{dialogItem}</div>
      <div className="dialog-items message">{messageItem}</div>
    </div>
  );
};

export default Dialogs;
