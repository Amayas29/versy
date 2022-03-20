import React from "react";
import Message from "./message/Message";

const MessagesList = (props) => {
  return (
    <ul className="message-list">
      {props.messages.map((message, index) => (
        <Message
          key={index}
          data={message}
          setMainContainer={props.setMainContainer}
        />
      ))}
    </ul>
  );
};

export default MessagesList;
