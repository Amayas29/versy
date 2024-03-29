import React from "react";
import Icon from "./Icon";
import AuthentificationLayout from "../layouts/AuthentificationLayout";
import Cookies from "js-cookie";

const ToggleConnexion = (props) => {
  const token = Cookies.get("access_token");

  return (
    <div
      className="toggle-connection"
      onClick={() => {
        if (token) Cookies.remove("access_token");

        props.setPage(<AuthentificationLayout setPage={props.setPage} />);
      }}
    >
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
