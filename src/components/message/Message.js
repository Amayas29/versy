import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageContent from "./MessageContent";
import MessageActions from "./MessageActions";
import MessageHeader from "./MessageHeader";
import MessageAction from "./MessageAction";

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
        <MessageAction name="fa-comment" list={props.comments} />
        <MessageAction name="fa-heart" list={props.likes} />
        <MessageAction name="fa-share" list={props.shares} />
      </MessageActions>
    </article>
  );
};

export default Message;
