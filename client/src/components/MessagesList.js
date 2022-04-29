import React from "react";
import Message from "./message/Message";

const MessagesList = (props) => {
  if (props.messages)
    return (
      <ul className="message-list">
        {props.messages.map((message, index) => (
          <Message
            key={index}
            data={message}
            setMainContainer={props.setMainContainer}
            setPage={props.setPage}
          />
        ))}
      </ul>
    );

  return <div className="no-messages">No messages found.</div>;
};

export default MessagesList;
