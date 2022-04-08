import React from "react";
import Icon from "../Icon";

const MessageOptions = (props) => {
  return (
    <div className="message-options-popup">
      <div className="message-option" onClick={() => props.close()}>
        Delete
        <Icon name="fa-trash-can" size="fa-lg" />
      </div>

      <div className="message-option" onClick={() => props.close()}>
        Edit
        <Icon name="fa-pen-to-square" size="fa-lg" />
      </div>
    </div>
  );
};

export default MessageOptions;
