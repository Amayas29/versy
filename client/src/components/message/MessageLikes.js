import React from "react";
import UsersList from "../UsersList";

const MessageLikes = (props) => {
  return (
    <div className="message-likes-container">
      <span className="message-likes-container-title">Likes</span>
      <UsersList
        users={props.likes}
        setMainContainer={(container) => {
          props.close();
          props.setMainContainer(container);
        }}
        hasBio={true}
        setPage={props.setPage}
      />
    </div>
  );
};

export default MessageLikes;
