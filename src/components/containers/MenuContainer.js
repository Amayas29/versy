import React from "react";
import Logo from "../Logo";
import MenuItem from "../MenuItem";
import ToggleConnection from "../ToggleConnection";

const MenuContainer = (props) => {
  let items = [];
  if (props.token) {
    items.push(<MenuItem title="Home" iconName="fa-house" />);
    items.push(<MenuItem title="Notifications" iconName="fa-bell" />);
    items.push(<MenuItem title="Messages" iconName="fa-envelope" />);
    items.push(<MenuItem title="Profile" iconName="fa-user" />);
    items.push(<MenuItem title="More" iconName="fa-ellipsis" />);
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
