import React from "react";
import ProfileContainer from "../containers/ProfileContainer";

const MessageAvatar = (props) => {
  return (
    <div className="message-avatar">
      <img
        src={props.user.avatar}
        alt="avatar"
        onClick={() =>
          props.setMainContainer(
            <ProfileContainer
              user={props.user}
              setMainContainer={props.setMainContainer}
            />
          )
        }
      />
    </div>
  );
};

export default MessageAvatar;
