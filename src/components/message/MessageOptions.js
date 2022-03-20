import React from "react";
import Icon from "../Icon";

const MessageOptions = () => {
  return (
    <div className="message-options-popup">
      <div className="message-option">
        Delete
        <Icon name="fa-trash-can" size="fa-lg" />
      </div>

      <div className="message-option">
        Message activity
        <Icon name="fa-chart-line" size="fa-lg" />
      </div>
    </div>
  );
};

export default MessageOptions;
