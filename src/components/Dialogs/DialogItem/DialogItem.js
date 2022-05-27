import { NavLink } from "react-router-dom";

import "./DialogItem.css";

const DialogItem = (props) => {
  const classActive = "person-item__link_active";
  const itemLink = "person-item__link";
  let path = "/dialogs/" + props.id;

  return (
    <div className="person-item">
      <NavLink
        className={({ isActive }) =>
          isActive ? `${classActive}` : `${itemLink}`
        }
        to={path}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
