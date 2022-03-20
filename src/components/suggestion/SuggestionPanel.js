import React from "react";
import UsersList from "../UsersList";

import a from "../../assets/images/a.jpg";
import b from "../../assets/images/b.jpg";
import c from "../../assets/images/c.png";
import d from "../../assets/images/d.png";

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

const users = [userA, userB, userC, userD];

const SuggestionPanel = (props) => {
  return (
    <div className="suggestion-panel">
      <div className="suggestion-panel-header">You may know</div>
      <UsersList users={users} setMainContainer={props.setMainContainer} />
    </div>
  );
};

export default SuggestionPanel;
