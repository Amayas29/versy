import React from "react";

class Icon extends React.Component {
  render() {
    return (
      <em
        ref={this.props.ref}
        className={`icon fa-solid ${this.props.name} ${this.props.size}`}
        onClick={this.props.onClick}
      ></em>
    );
  }
}

export default Icon;
