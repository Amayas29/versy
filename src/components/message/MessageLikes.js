import React from "react";
import UsersList from "../UsersList";

const MessageLikes = (props) => {
  return (
    <div className="message-likes-container">
      <UsersList
        users={props.users}
        setMainContainer={props.setMainContainer}
        hasBio={true}
      />
    </div>
  );
};

export default MessageLikes;
