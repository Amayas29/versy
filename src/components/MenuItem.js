import React from "react";
import Action from "./Action";

const handleClick = (props, ref) => {
  if (props.title === "More") {
    const rect = ref.current.getBoundingClientRect();
    console.log(rect);
  }
};

const MenuItem = React.forwardRef((props, ref) => (
  <div ref={ref} className="menu-item" onClick={() => handleClick(props, ref)}>
    <Action name={props.iconName} size="fa-2xl" />
    <span>{props.title}</span>
  </div>
));

export default MenuItem;
