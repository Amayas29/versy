import React from "react";
import Icon from "../Icon";

const Notification = (props) => {
  let name = "";
  let text = "";

  switch (props.type) {
    case "like":
      name = "fa-heart";
      text = "liked your message";
      break;
    case "follow":
      name = "fa-user";
      text = "followed you";
      break;

    case "comment":
      name = "fa-comment";
      text = "commented on your message";
      break;

    default:
      break;
  }

  return (
    <div className="notification-container">
      <div className="notification-header">
        <Icon name={name} size="fa-2xl" />
      </div>

      <div className="notification-body">
        <img
          src={props.user.avatar}
          alt="avatar"
          className="notification-avatar"
        />

        <div className="notification-content">
          <span>
            <span className="notification-user">{props.user.name}</span> {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
