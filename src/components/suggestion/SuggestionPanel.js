import React from "react";
import UserSuggestion from "./UserSuggestion";
import avatar from "../../assets/images/avatar.jpg";

const SuggestionPanel = () => {
  const user = { avatar: avatar, name: "John Doe", username: "@johndoe" };
  return (
    <div className="suggestion-panel">
      <div className="suggestion-panel-header">You may know</div>
      <ul className="suggestion-panel-list">
        <UserSuggestion user={user} />
        <UserSuggestion user={user} />
        <UserSuggestion user={user} />
        <UserSuggestion user={user} />
      </ul>
    </div>
  );
};

export default SuggestionPanel;
