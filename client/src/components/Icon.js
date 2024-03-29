import React from "react";

const Icon = React.forwardRef((props, ref) => {
  return (
    <em
      className={`icon fa-solid ${props.name} ${props.size} ${props.effect}`}
      onClick={props.onClick}
      ref={ref}
    ></em>
  );
});

export default Icon;
