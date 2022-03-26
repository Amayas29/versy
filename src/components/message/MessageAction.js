import React from "react";
import Icon from "../Icon";

const MessageAction = React.forwardRef((props, ref) => {
  return (
    <span className="message-action" ref={ref}>
      <Icon name={props.name} size="fa-xl" onClick={props.onClick} />
      {props.list.length}
    </span>
  );
});

export default MessageAction;
