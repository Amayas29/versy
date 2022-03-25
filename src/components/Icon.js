import React from "react";

const Icon = (props) => {
  return (
    <em
      className={`icon fa-solid ${props.name} ${props.size}`}
      onClick={props.onClick}
    ></em>
  );
};

export default Icon;
