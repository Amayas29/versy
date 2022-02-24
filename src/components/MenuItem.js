import React from "react";
import Action from "./Action";

const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <Action name={props.iconName} size="fa-2xl" />
      <span>{props.title}</span>
    </div>
  );
};

export default MenuItem;
