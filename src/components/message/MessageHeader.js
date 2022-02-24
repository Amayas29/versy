import React from "react";

const MessageHeader = (props) => {
  return (
    <div className="message-header">
      <span>{props.name}</span>
      <span>{props.username}</span>
      <i className="fa-solid fa-minus"></i>
      <span>{props.time}</span>
    </div>
  );
};

export default MessageHeader;
