import React from "react";
import timeElapsed from "../../utils/DateUtils";

const MessageHeader = (props) => {
  return (
    <div className="message-header">
      <span>{props.message.user.name}</span>
      <span>{props.message.user.username}</span>
      <i className="fa-solid fa-minus"></i>
      <span>{timeElapsed(props.message.publishDate)}</span>
    </div>
  );
};

export default MessageHeader;
