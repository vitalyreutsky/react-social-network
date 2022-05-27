import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPost";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="app-content profile">
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
