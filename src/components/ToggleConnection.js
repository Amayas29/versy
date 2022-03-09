import React from "react";
import Icon from "./Icon";

const ToggleConnexion = (props) => {
  const token = "a";

  return (
    <div className="toggle-connection">
      <span className="menu-separator"></span>
      {token ? (
        <span className="linear">
          <Icon name="fa-arrow-right-from-bracket" size="fa-2xl" />
          <Icon name="fa-arrow-right" size="fa-2xl" />
          <span>Logout</span>
        </span>
      ) : (
        <span className="linear">
          <Icon name="fa-arrow-right-to-bracket" size="fa-2xl" />
          <Icon name="fa-arrow-right" size="fa-2xl" />
          <span>Login</span>
        </span>
      )}
    </div>
  );
};

export default ToggleConnexion;
