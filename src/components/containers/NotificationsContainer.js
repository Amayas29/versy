import React from "react";
import Notification from "../notifications/Notification";
import logo from "../../assets/images/avatar.jpg";

const NotificationsContainer = () => {
  const user = { avatar: logo, name: "John Doe", username: "@johndoe" };
  return (
    <div className="central-container">
      <Notification user={user} type="like" />
      <Notification user={user} type="follow" />
      <Notification user={user} type="comment" />
    </div>
  );
};

export default NotificationsContainer;
