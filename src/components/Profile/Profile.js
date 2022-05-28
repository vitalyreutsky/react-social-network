import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPost";

import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="app-content profile">
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
