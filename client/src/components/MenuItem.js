import React from "react";
import Icon from "./Icon";

class MenuItem extends React.Component {
  render() {
    return (
      <div className="menu-item" onClick={this.props.onClick}>
        <Icon name={this.props.icon} size="fa-2xl" />
        <span>{this.props.title}</span>
      </div>
    );
  }
}
export default MenuItem;
