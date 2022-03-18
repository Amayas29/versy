import React from "react";
import UserSuggestion from "./UserSuggestion";

import a from "../../assets/images/a.jpg";
import b from "../../assets/images/b.jpg";
import c from "../../assets/images/c.png";
import d from "../../assets/images/d.png";

const SuggestionPanel = (props) => {
  const userA = {
    id: 1,
    avatar: a,
    name: "Amayas",
    username: "@sadi",
    bio: "Hey bro",
    birthday: new Date(2001, 4, 29),
    location: "Paris, France",
    joinedDate: new Date(2019, 6, 1),
  };

  const userB = {
    id: 1,
    avatar: b,
    name: "Amayas",
    username: "@sadi",
    bio: "Hey bro",
    birthday: new Date(2001, 4, 29),
    location: "Paris, France",
    joinedDate: new Date(2019, 6, 1),
  };

  const userC = {
    id: 1,
    avatar: c,
    name: "Amayas",
    username: "@sadi",
    bio: "Hey bro",
    birthday: new Date(2001, 4, 29),
    location: "Paris, France",
    joinedDate: new Date(2019, 6, 1),
  };

  const userD = {
    id: 1,
    avatar: d,
    name: "Amayas",
    username: "@sadi",
    bio: "Hey bro",
    birthday: new Date(2001, 4, 29),
    location: "Paris, France",
    joinedDate: new Date(2019, 6, 1),
  };

  return (
    <div className="suggestion-panel">
      <div className="suggestion-panel-header">You may know</div>
      <ul className="suggestion-panel-list">
        <UserSuggestion
          user={userA}
          setMainContainer={props.setMainContainer}
        />
        <UserSuggestion
          user={userB}
          setMainContainer={props.setMainContainer}
        />
        <UserSuggestion
          user={userC}
          setMainContainer={props.setMainContainer}
        />
        <UserSuggestion
          user={userD}
          setMainContainer={props.setMainContainer}
        />
      </ul>
    </div>
  );
};

export default SuggestionPanel;
