import React from "react";
import Notification from "../notifications/Notification";
import { getUser, getUserMessages } from "../../data/data";

const NotificationsContainer = (props) => {
  const user = getUser("1");

  const message = getUserMessages("2")[0];

  return (
    <div className="central-container">
      <Notification
        user={user}
        message={message}
        type="like"
        setMainContainer={props.setMainContainer}
      />
      <Notification
        user={user}
        type="follow"
        setMainContainer={props.setMainContainer}
      />
      <Notification
        user={user}
        message={message}
        type="comment"
        setMainContainer={props.setMainContainer}
      />
    </div>
  );
};

export default NotificationsContainer;
