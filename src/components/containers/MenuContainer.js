import React from "react";
import Logo from "../Logo";
import MenuItem from "../MenuItem";
import ToggleConnection from "../ToggleConnection";
import MorePanel from "../more-panel/MorePanel";

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.posRef = React.createRef();
  }

  render() {
    let items = [];
    if (this.props.token) {
      items.push(<MenuItem key={0} title="Home" iconName="fa-house" />);
      items.push(<MenuItem key={1} title="Notifications" iconName="fa-bell" />);
      items.push(<MenuItem key={2} title="Messages" iconName="fa-envelope" />);
      items.push(<MenuItem key={3} title="Profile" iconName="fa-user" />);
      items.push(
        <MenuItem
          key={4}
          title="More"
          iconName="fa-ellipsis"
          ref={this.posRef}
        />
      );
    }

    return (
      <aside className="menu">
        <Logo />
        <div className="items">{items}</div>
        {/* <MorePanel />; */}
        <ToggleConnection />
      </aside>
    );
  }
}

export default MenuContainer;
