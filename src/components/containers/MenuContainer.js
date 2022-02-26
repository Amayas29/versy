import React from "react";
import Logo from "../Logo";
import MenuItem from "../MenuItem";

const MenuContainer = (props) => {
  return (
    <aside className="menu">
      <Logo />
      <div className="items">
        <MenuItem title="Home" iconName="fa-house" />
        <MenuItem title="Notifications" iconName="fa-bell" />
        <MenuItem title="Messages" iconName="fa-envelope" />
        <MenuItem title="Profile" iconName="fa-user" />
        <MenuItem title="More" iconName="fa-ellipsis" />
      </div>
      <div style={{ color: "white" }}>USER : TODO</div>
    </aside>
  );
};

export default MenuContainer;