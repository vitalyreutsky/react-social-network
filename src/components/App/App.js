import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <Header />
          <div className="app-wrapper">
            <Nav />
            <div className="app-wrapper-content">
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/dialogs/*" element={<Dialogs />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
