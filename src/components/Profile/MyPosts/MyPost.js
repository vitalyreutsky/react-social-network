import Post from "./Post/Post";

import "./MyPost.css";

const MyPosts = () => {
  return (
    <div className="profile-content__user profile__user">
      <div className="profile-user__title">My post</div>
      <div className="profile-user__add-post">
        <textarea className="profile-user__textarea"></textarea>
        <button className="profile-user__btn">Добавить</button>
      </div>
      <Post />
    </div>
  );
};

export default MyPosts;
