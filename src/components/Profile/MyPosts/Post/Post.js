import React from "react";

import "./Post.css";

const Post = (props) => {
  return (
    <div className="profile-user__post">
      <img
        className="profile-user__logo"
        src="https://cdn-icons.flaticon.com/png/128/4140/premium/4140037.png?token=exp=1653393093~hmac=e309ed69b20cfcb12bc1dc0694a8d1f4"
        alt="logo"
      />
      <p className="profile-user__text">{props.message}</p>
      <div className="profile-user__likes">
        <div className="profile-user__like like-count">
          <button className="like btn-reset">
            <img
              src="https://cdn-icons.flaticon.com/png/128/880/premium/880452.png?token=exp=1653393466~hmac=6835cd9b62bd24b5c57dd4ffa1adeb79"
              alt="likes"
            />
          </button>
          <span className="like-count__likes">{props.like}</span>
        </div>
        <div className="profile-user__dislike like-count">
          <button className="dislike btn-reset">
            <img
              src="https://cdn-icons.flaticon.com/png/128/880/premium/880460.png?token=exp=1653393466~hmac=70da8727bc22c55bb742ab0d2b5bfcaf"
              alt="dislikes"
            />
          </button>
          <span className="like-count__dislikes">{props.dislike}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
