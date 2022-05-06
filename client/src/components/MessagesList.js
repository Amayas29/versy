import React from "react";
import Message from "./message/Message";

const MessagesList = (props) => {
  if (props.messages && props.messages.length > 0)
    return (
      <ul className="message-list">
        {props.messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            setMainContainer={props.setMainContainer}
            setPage={props.setPage}
            refresh={props.refresh}
          />
        ))}
      </ul>
    );

  return (
    <div className="no-messages">
      {props.comments ? "No comments found" : "No messages found"}{" "}
    </div>
  );
};

export default MessagesList;
