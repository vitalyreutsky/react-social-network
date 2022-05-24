import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="app-wrapper">
          <Nav />
          <div className="app-inner">
            <Dialogs />
            {/*<Profile />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
