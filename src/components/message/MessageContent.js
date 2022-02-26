import React from "react";

const MessageContent = (props) => {
  return (
    <div className="message-content">
      <span>{props.content}</span>
    </div>
  );
};

export default MessageContent;