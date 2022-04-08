import React from "react";

const MessageActions = (props) => {
  return (
    <div className="message-actions">
      <div className="actions">{props.children}</div>
      {props.hasButton !== undefined && (
        <div className="btn" onClick={props.publish}>
          Publish
        </div>
      )}
    </div>
  );
};

export default MessageActions;
