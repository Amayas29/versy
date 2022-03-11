import React from "react";

const MessageActions = (props) => {
  return (
    <div className="message-actions">
      <div className="actions">{props.children}</div>
      {props.hasButton !== undefined && (
        <div className="btn" onClick={() => {}}>
          Publish
        </div>
      )}
    </div>
  );
};

export default MessageActions;
