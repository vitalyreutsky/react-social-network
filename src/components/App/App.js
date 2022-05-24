import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="app-wrapper">
          <Nav />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default App;
