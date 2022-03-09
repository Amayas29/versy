import React from "react";
import Icon from "../Icon";

const MessageAction = (props) => {
  return (
    <span className="message-action">
      <Icon name={props.name} size="fa-xl" />
      {props.list.length}
    </span>
  );
};

export default MessageAction;
