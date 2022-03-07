import React from "react";
import Action from "../Action";

class MorePanel extends React.Component {
  render() {
    return (
      <div className="more-panel">
        <Item icon="fa-gear" name="settings" />
        <Item icon="fa-chart-line" name="Analytics" />
        <Item icon="fa-circle-info" name="About us" />
      </div>
    );
  }
}

const Item = (props) => {
  return (
    <div className="more-panel-item">
      <Action name={props.icon} size="fa-xl" />
      <span>{props.name}</span>
    </div>
  );
};

export default MorePanel;
