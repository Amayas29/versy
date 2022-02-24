import React from "react";

const MessageAvatar = (props) => {
  return (
    <div className="message-avatar">
      <img src={props.avatar} alt="avatar" />
    </div>
  );
};

export default MessageAvatar;
