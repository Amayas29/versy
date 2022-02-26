import React from "react";
import UserSuggestion from "./UserSuggestion";
import avatar from "../../assets/avatar.jpg";

const SuggestionPanel = () => {
  return (
    <div className="suggestion-panel">
      <div className="suggestion-panel-header">You may know</div>
      <ul className="suggestion-panel-list">
        <UserSuggestion avatar={avatar} name="Amayas" username="@Amayas29" />
        <UserSuggestion avatar={avatar} name="Amayas" username="@Amayas29" />
        <UserSuggestion avatar={avatar} name="Amayas" username="@Amayas29" />
        <UserSuggestion avatar={avatar} name="Amayas" username="@Amayas29" />
        <UserSuggestion avatar={avatar} name="Amayas" username="@Amayas29" />
      </ul>
    </div>
  );
};

export default SuggestionPanel;
