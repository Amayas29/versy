import React from "react";
import Action from "../Action";

const MessageAction = (props) => {
  return (
    <span className="message-action">
      <Action name={props.name} size="fa-xl" />
      {props.list.length}
    </span>
  );
};

export default MessageAction;
