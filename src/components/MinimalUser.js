import React from "react";
import ProfileContainer from "./containers/ProfileContainer";

const redirectUserProfile = (user, setMainContainer) => {
  setMainContainer(
    <ProfileContainer user={user} setMainContainer={setMainContainer} />
  );
};

const MinimalUser = (props) => {
  return (
    <div className="minimal-user-container">
      <div className="minimal-user">
        <img
          className="minimal-user-avatar"
          src={props.user.avatar}
          alt="avatar"
          onClick={() => {
            redirectUserProfile(props.user, props.setMainContainer);
          }}
        />
        <div className="minimal-user-info">
          <span
            onClick={() => {
              redirectUserProfile(props.user, props.setMainContainer);
            }}
          >
            {props.user.name}
          </span>
          <span>{props.user.username}</span>
        </div>
      </div>
      <div className="btn">Follow</div>
    </div>
  );
};

export default MinimalUser;
