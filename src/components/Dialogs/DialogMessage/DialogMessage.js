import "./DialogMessage.css";

const DialogMessage = (props) => {
  return (
    <div className="message-item">
      <p className="message-text">{props.message}</p>
    </div>
  );
};

export default DialogMessage;
