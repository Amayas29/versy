import React from "react";

const UserSuggestion = (props) => {
  return (
    <li className="suggest-item">
      <div className="suggest-user">
        <img className="suggest-avatar" src={props.user.avatar} alt="avatar" />
        <div className="suggest-user_info">
          <span className="suggest-name">{props.user.name}</span>
          <span className="suggest-username">{props.user.username}</span>
        </div>
      </div>
      <div className="btn">Follow</div>
    </li>
  );
};

export default UserSuggestion;
