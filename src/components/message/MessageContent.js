import React from "react";
import ImageHolder from "./ImageHolder";

const MessageContent = (props) => {
  return (
    <div className="message-content">
      {props.message.content && <span>{props.message.content}</span>}
      {props.message.image && <ImageHolder image={props.message.image} />}
    </div>
  );
};

export default MessageContent;
