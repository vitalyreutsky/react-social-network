import "./Post.css";

const Post = () => {
  return (
    <div className="profile-user__post">
      <img
        className="profile-user__logo"
        src="https://cdn-icons.flaticon.com/png/128/4140/premium/4140037.png?token=exp=1653393093~hmac=e309ed69b20cfcb12bc1dc0694a8d1f4"
        alt="logo"
      />
      <p className="profile-user__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id labore
        consequuntur exercitationem nihil magnam eaque aperiam veniam recusandae
        eum dolorem? Dolore qui quo unde aperiam, ipsa quidem eligendi ad
        reiciendis.
      </p>
      <div className="profile-user__likes">
        <a className="like" href="#">
          <img
            src="https://cdn-icons.flaticon.com/png/128/880/premium/880452.png?token=exp=1653393466~hmac=6835cd9b62bd24b5c57dd4ffa1adeb79"
            alt="like"
          />
        </a>
        <a className="dislike" href="#">
          <img
            src="https://cdn-icons.flaticon.com/png/128/880/premium/880460.png?token=exp=1653393466~hmac=70da8727bc22c55bb742ab0d2b5bfcaf"
            alt="dislike"
          />
        </a>
      </div>
    </div>
  );
};

export default Post;
