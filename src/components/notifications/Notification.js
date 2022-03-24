import React from "react";
import MessageViewContainer from "../containers/MessageViewContainer";
import ProfileContainer from "../containers/ProfileContainer";
import Icon from "../Icon";

const Notification = (props) => {
  let name = "";
  let text = "";
  let container = null;

  switch (props.type) {
    case "like":
      name = "fa-heart";
      text = "liked your message";
      container = (
        <MessageViewContainer
          message={props.message}
          setMainContainer={props.setMainContainer}
        />
      );
      break;
    case "follow":
      name = "fa-user";
      text = "followed you";
      container = (
        <ProfileContainer
          user={props.user}
          setMainContainer={props.setMainContainer}
        />
      );
      break;

    case "comment":
      name = "fa-comment";
      text = "commented on your message";
      container = (
        <MessageViewContainer
          message={props.message}
          setMainContainer={props.setMainContainer}
        />
      );
      break;

    default:
      break;
  }

  return (
    <div
      className="notification-container"
      onClick={() => {
        props.setMainContainer(container);
      }}
    >
      <div className="notification-header">
        <Icon name={name} size="fa-2xl" />
      </div>

      <div className="notification-body">
        <img
          src={props.user.avatar}
          alt="avatar"
          className="notification-avatar"
        />

        <div className="notification-content break">
          <span className="notification-user">{props.user.name}</span> {text}
        </div>
      </div>
    </div>
  );
};

export default Notification;
