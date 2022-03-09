import React from "react";

class Icon extends React.Component {
  render() {
    return (
      <em
        className={`icon fa-solid ${this.props.name} ${this.props.size}`}
      ></em>
    );
  }
}

export default Icon;
