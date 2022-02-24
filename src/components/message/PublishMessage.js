import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageActions from "./MessageActions";
import Action from "../Action";

const PublishMessage = (props) => {
  return (
    <article className="message publish">
      <MessageAvatar avatar={props.avatar} />
      <div className="message-content">
        <div
          className="input"
          contentEditable="true"
          spellCheck="false"
          data-placeholder="What's happening?"
        ></div>
      </div>
      <MessageActions>
        <Action name="fa-face-smile" size="fa-xl" />
        <Action name="fa-image" size="fa-xl" />
        <Action name="fa-square-poll-vertical" size="fa-xl" />
      </MessageActions>
    </article>
  );
};

export default PublishMessage;
