import React from "react";
import Notification from "../notifications/Notification";
import logo from "../../assets/images/avatar.jpg";

const NotificationsContainer = () => {
  return (
    <div className="central-container">
      <Notification user={{ name: "Amayas", avatar: logo }} type="like" />
      <Notification user={{ name: "Amayas", avatar: logo }} type="follow" />
      <Notification user={{ name: "Amayas", avatar: logo }} type="comment" />
    </div>
  );
};

export default NotificationsContainer;
