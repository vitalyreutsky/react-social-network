import React from "react";

import DialogMessage from "./DialogMessage/DialogMessage";
import DialogItem from "./DialogItem/DialogItem";

import "./Dialogs.css";

const Dialogs = (props) => {
  const dialogsData = [
    { key: 1, name: "Vitaly", male: "man" },
    { key: 2, name: "Vitya", male: "man" },
    { key: 3, name: "Anna", male: "woman" },
    { key: 4, name: "Tolya", male: "man" },
    { key: 5, name: "Mark", male: "man" },
  ];

  const messagesData = [
    { key: 1, message: "Hi" },
    { key: 2, message: "How Are you" },
    { key: 3, message: "Go to the cinema" },
    { key: 4, message: "Yesss!!!" },
    { key: 5, message: "I miss you:)" },
  ];

  const dialogItem = dialogsData.map((el) => {
    return <DialogItem name={el.name} key={el.key} id={el.key} />;
  });

  const messageItem = messagesData.map((el) => {
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
