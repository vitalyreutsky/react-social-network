import Post from "./Post/Post";

import "./MyPost.css";

const MyPosts = (props) => {
  const postItem = props.posts.map((el) => {
    return (
      <Post
        key={el.key}
        id={el.key}
        message={el.message}
        like={el.likes}
        dislike={el.dislike}
      />
    );
  });

  return (
    <div className="profile-content__user profile__user">
      <div className="profile-user__title">My post</div>
      <div className="profile-user__add-post">
        <textarea className="profile-user__textarea"></textarea>
        <button className="profile-user__btn btn-reset">Добавить</button>
      </div>
      {postItem}
    </div>
  );
};

export default MyPosts;
