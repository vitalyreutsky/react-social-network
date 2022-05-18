import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="app__content">
          <Nav />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default App;
