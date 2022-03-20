import React from "react";
import Notification from "../notifications/Notification";
import avatar from "../../assets/images/avatar.jpg";

const NotificationsContainer = (props) => {
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

  const message = {
    content: "Hey bg",
    image: "",
    user: user,
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  };

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
