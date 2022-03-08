import React from "react";
import Action from "./Action";

const ToggleConnexion = (props) => {
  const token = "a";

  return (
    <div className="toggle-connection">
      {token ? (
        <span className="linear">
          <Action name="fa-arrow-right-from-bracket" size="fa-2xl" />
          <Action name="fa-arrow-right" size="fa-2xl" />
          Logout
        </span>
      ) : (
        <span className="linear">
          <Action name="fa-arrow-right-to-bracket" size="fa-2xl" />
          <Action name="fa-arrow-right" size="fa-2xl" />
          Login
        </span>
      )}
    </div>
  );
};

export default ToggleConnexion;
