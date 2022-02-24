import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageContent from "./MessageContent";
import MessageActions from "./MessageActions";
import MessageHeader from "./MessageHeader";
import Action from "../Action";

const Message = (props) => {
  return (
    <article className="message">
      <MessageAvatar avatar={props.avatar} />
      <MessageHeader
        name={props.name}
        username={props.username}
        time={props.time}
      />
      <MessageContent content={props.content} />
      <MessageActions>
        <Action name="fa-comment" size="fa-xl" />
        <Action name="fa-heart" size="fa-xl" />
        <Action name="fa-share" size="fa-xl" />
      </MessageActions>
    </article>
  );
};

export default Message;
