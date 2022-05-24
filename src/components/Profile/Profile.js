import React from "react";
import MyPosts from "./MyPosts/MyPost";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="app-content profile">
      <div className="app-content__bg">
        <img
          className="image"
          src="https://storage.yandexcloud.net/incrussia-prod/wp-content/uploads/2018/11/iStock-805119394.jpg"
          alt="bg"
        />
      </div>

      <MyPosts />
    </div>
  );
};

export default Profile;
