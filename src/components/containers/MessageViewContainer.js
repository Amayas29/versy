import React from "react";
import Message from "../message/Message";
import avatar from "../../assets/images/avatar.jpg";
import MessagesList from "../MessagesList";
import PublishMessage from "../message/PublishMessage";

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
  content: "Hello world Hey",
  image: "",
  user: user,
  publishDate: new Date(),
  likes: [],
  comments: [],
  shares: [],
};

const MessageViewContainer = (props) => {
  const messages = [message, message];
  return (
    <div className="central-container message-view-container">
      <Message data={props.message} />
      <PublishMessage user={user} />
      <MessagesList
        messages={messages}
        setMainContainer={props.setMainContainer}
      />
    </div>
  );
};

export default MessageViewContainer;
