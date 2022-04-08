import React from "react";
import { getUser } from "../data/data";
import AuthentificationLayout from "../layouts/AuthentificationLayout";
import getCookie from "../utils/Cookies";
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
          setPage={props.setPage}
        />
      ))}
      {props.more}
    </ul>
  );
};

const redirectUserProfile = (user, setMainContainer, setPage) => {
  setMainContainer(
    <ProfileContainer
      user={user}
      setMainContainer={setMainContainer}
      setPage={setPage}
    />
  );
};

const UserVue = (props) => {
  const token = getCookie("token");
  const user = getUser(token);

  return (
    <li className="user-list-item">
      <div className="minimal-user-container">
        <div className="minimal-user">
          <img
            className="minimal-user-avatar"
            src={props.data.avatar}
            alt="avatar"
            onClick={() => {
              redirectUserProfile(
                props.data,
                props.setMainContainer,
                props.setPage
              );
            }}
          />
          <div className="minimal-user-info">
            <span
              onClick={() =>
                redirectUserProfile(
                  props.data,
                  props.setMainContainer,
                  props.setPage
                )
              }
            >
              {props.data.name}
            </span>
            <span>{props.data.username}</span>
          </div>
        </div>
        {user && user.id !== props.data.id && (
          <div
            className="btn"
            onClick={() => {
              if (token) {
                return;
              }

              props.setPage(<AuthentificationLayout setPage={props.setPage} />);
            }}
          >
            Follow
          </div>
        )}
      </div>
      {props.hasBio && (
        <span className="user-list-item-bio">{props.data.bio}</span>
      )}
    </li>
  );
};

export default UsersList;
