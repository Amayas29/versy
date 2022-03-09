import React from "react";
import Icon from "../Icon";

const UserBanner = (props) => {
  return (
    <div className="user-banner-container">
      <UserHeader user={props.user} />
      <div className="btn user-banner-edit-profile">Edit profile</div>

      <span className="user-bio">{props.user.bio}</span>

      <div className="user-metadatas">
        <UserMetadata name="fa-location-dot" data="Paris, France" />
        <UserMetadata name="fa-cake-candles" data="Born May 29, 2001" />
        <UserMetadata name="fa-calendar-days" data="Joined June 1, 2019" />
      </div>

      <div className="user-stats">
        <UserStat value="10" name="Following" />
        <UserStat value="10" name="Followers" />
      </div>
    </div>
  );
};

const UserHeader = (props) => {
  return (
    <div className="user-header">
      <img src={props.user.avatar} alt="avatar" className="user-avatar" />

      <div className="user-pseudos">
        <span>{props.user.name}</span>
        <span>{props.user.username}</span>
      </div>
    </div>
  );
};

const UserMetadata = (props) => {
  return (
    <div className="user-metadata">
      <Icon name={props.name} size="fa-lg" />
      <span>{props.data}</span>
    </div>
  );
};

const UserStat = (props) => {
  return (
    <div className="user-stat">
      <span>{props.value}</span>
      <span>{props.name}</span>
    </div>
  );
};

export default UserBanner;
