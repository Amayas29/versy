import React from "react";

class Action extends React.Component {
  render() {
    return (
      <em
        className={`action fa-solid ${this.props.name} ${this.props.size}`}
      ></em>
    );
  }
}

export default Action;
