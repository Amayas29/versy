import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageActions from "./MessageActions";
import Icon from "../Icon";

const PublishMessage = (props) => {
  return (
    <article className="message publish">
      <MessageAvatar user={props.user} />
      <div className="message-content">
        <div
          className="message-input"
          contentEditable="true"
          spellCheck="false"
          data-placeholder="What's happening?"
        ></div>
      </div>
      <MessageActions hasButton={true}>
        <Icon name="fa-face-smile" size="fa-xl" />
        <Icon name="fa-image" size="fa-xl" />
        <Icon name="fa-square-poll-vertical" size="fa-xl" />
      </MessageActions>
    </article>
  );
};

export default PublishMessage;
