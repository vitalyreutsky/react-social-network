const Profile = () => {
  return (
    <div className="app__main-content profile__content">
      <div className="profile__content-bg">
        <img
          className="image"
          src="https://storage.yandexcloud.net/incrussia-prod/wp-content/uploads/2018/11/iStock-805119394.jpg"
          alt="bg"
        />
      </div>
      <div className="profile__content-user profile__user">
        <img className="profile__user-img" src="" alt="user" />
        <div className="profile__user__title">My post</div>
        <div className="profile__user__title">New post</div>
        <div className="profile__user__title">Post 1</div>
        <div className="profile__user__title">Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
