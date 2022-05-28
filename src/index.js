import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

const postsData = [
  { key: 1, message: "Hi, are you?", likes: 10, dislike: 1 },
  { key: 2, message: "Hi, it`s my first post!", likes: 40, dislike: 3 },
  { key: 3, message: "I'm fine!", likes: 21, dislike: 0 },
];

const dialogsData = [
  { key: 1, name: "Vitaly", male: "man" },
  { key: 2, name: "Vitya", male: "man" },
  { key: 3, name: "Anna", male: "woman" },
  { key: 4, name: "Tolya", male: "man" },
  { key: 5, name: "Mark", male: "man" },
];

const messagesData = [
  { key: 1, message: "Hi!" },
  { key: 2, message: "How Are you?" },
  { key: 3, message: "Go to the cinema." },
  { key: 4, message: "Yesss!!!" },
  { key: 5, message: "I miss you:)" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
