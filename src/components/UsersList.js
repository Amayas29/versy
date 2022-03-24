import React from "react";
import ProfileContainer from "./containers/ProfileContainer";

const UsersList = (props) => {
  return (
    <ul className="user-list">
      {props.users.map((user, index) => (
        <UserVue
          key={index}
          data={user}
          setMainContainer={props.setMainContainer}
          hasBio={props.hasBio}
        />
      ))}
      {props.more}
    </ul>
  );
};

const redirectUserProfile = (user, setMainContainer) => {
  setMainContainer(
    <ProfileContainer user={user} setMainContainer={setMainContainer} />
  );
};

const UserVue = (props) => {
  return (
    <li className="user-list-item">
      <div className="minimal-user-container">
        <div className="minimal-user">
          <img
            className="minimal-user-avatar"
            src={props.data.avatar}
            alt="avatar"
            onClick={() => {
              redirectUserProfile(props.data, props.setMainContainer);
            }}
          />
          <div className="minimal-user-info">
            <span
              onClick={() =>
                redirectUserProfile(props.data, props.setMainContainer)
              }
              className="break"
            >
              {props.data.name}
            </span>
            <span className="break">{props.data.username}</span>
          </div>
        </div>
        <div className="btn">Follow</div>
      </div>
      {props.hasBio && (
        <span className="user-list-item-bio">{props.data.bio}</span>
      )}
    </li>
  );
};

export default UsersList;
