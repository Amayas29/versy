import React from "react";

import MinimalUser from "../MinimalUser";

const UserSuggestion = (props) => {
  return (
    <li className="suggest-item">
      <MinimalUser user={props.user} />
    </li>
  );
};

export default UserSuggestion;
