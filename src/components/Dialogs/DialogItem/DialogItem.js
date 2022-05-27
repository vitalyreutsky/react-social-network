import { NavLink } from "react-router-dom";

import "./DialogItem.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className="person-item">
      <NavLink className="person-item__link" to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
