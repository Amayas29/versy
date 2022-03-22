import React from "react";
import UsersList from "../UsersList";
import { getUser } from "../../data/data";

const users = [getUser("1"), getUser("2"), getUser("3"), getUser("4")];

const SuggestionPanel = (props) => {
  return (
    <div className="suggestion-panel">
      <div className="suggestion-panel-header">You may know</div>
      <UsersList users={users} setMainContainer={props.setMainContainer} />
    </div>
  );
};

export default SuggestionPanel;
