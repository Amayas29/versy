import React from "react";
import UsersList from "../UsersList";

const MessageLikes = (props) => {
  return (
    <div className="message-likes-container">
      <UsersList
        users={props.likes}
        setMainContainer={(container) => {
          props.close();
          props.setMainContainer(container);
        }}
        hasBio={true}
      />
    </div>
  );
};

export default MessageLikes;
