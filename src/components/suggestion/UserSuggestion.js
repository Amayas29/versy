import React from "react";
import ProfileContainer from "../containers/ProfileContainer";

const redirectUserProfile = (user, setMainContainer) => {
  setMainContainer(
    <ProfileContainer user={user} setMainContainer={setMainContainer} />
  );
};

const UserSuggestion = (props) => {
  return (
    <li className="suggest-item">
      <div className="suggest-user">
        <img
          className="suggest-avatar"
          src={props.user.avatar}
          alt="avatar"
          onClick={() => {
            redirectUserProfile(props.user, props.setMainContainer);
          }}
        />
        <div className="suggest-user_info">
          <span
            className="suggest-name"
            onClick={() => {
              redirectUserProfile(props.user, props.setMainContainer);
            }}
          >
            {props.user.name}
          </span>
          <span className="suggest-username">{props.user.username}</span>
        </div>
      </div>
      <div className="btn">Follow</div>
    </li>
  );
};

export default UserSuggestion;
