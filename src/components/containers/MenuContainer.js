import React from "react";
import Logo from "../Logo";
import MenuItem from "../MenuItem";
import ToggleConnection from "../ToggleConnection";

const MenuContainer = (props) => {
  let items = [];
  if (props.token) {
    items.push(<MenuItem key={0} title="Home" iconName="fa-house" />);
    items.push(<MenuItem key={1} title="Notifications" iconName="fa-bell" />);
    items.push(<MenuItem key={2} title="Messages" iconName="fa-envelope" />);
    items.push(<MenuItem key={3} title="Profile" iconName="fa-user" />);
    items.push(<MenuItem key={4} title="More" iconName="fa-ellipsis" />);
  }

  return (
    <aside className="menu">
      <Logo />
      <div className="items">{items}</div>
      <ToggleConnection token={props.token} />
    </aside>
  );
};

export default MenuContainer;
