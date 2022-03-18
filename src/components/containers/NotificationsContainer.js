import React from "react";
import Notification from "../notifications/Notification";
import avatar from "../../assets/images/avatar.jpg";

const NotificationsContainer = () => {
  const user = {
    id: 1,
    avatar: avatar,
    name: "Amayas",
    username: "@sadi",
    bio: "Hey bro",
    birthday: new Date(2001, 4, 29),
    location: "Paris, France",
    joinedDate: new Date(2019, 6, 1),
  };

  return (
    <div className="central-container">
      <Notification user={user} type="like" />
      <Notification user={user} type="follow" />
      <Notification user={user} type="comment" />
    </div>
  );
};

export default NotificationsContainer;
