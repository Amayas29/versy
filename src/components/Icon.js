import React from "react";

const Icon = React.forwardRef((props, ref) => (
  <em
    ref={ref}
    className={`icon fa-solid ${props.name} ${props.size}`}
    onClick={props.onClick}
  ></em>
));

export default Icon;
