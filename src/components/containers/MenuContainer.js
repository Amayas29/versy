import React from "react";
import Logo from "../Logo";
import MenuItem from "../MenuItem";
import ToggleConnection from "../ToggleConnection";
import FeedContainer from "./FeedContainer";
import ProfileContainer from "./ProfileContainer";
import NotificationsContainer from "./NotificationsContainer";
import AboutUsContainer from "./AboutUsContainer";
import AnalyticsContainer from "./AnalyticsContainer";

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "a",
      morePanelDisplay: false,
    };

    this.toggleMorePanelDisplay = this.toggleMorePanelDisplay.bind(this);
  }

  toggleMorePanelDisplay = () => {
    this.setState({
      morePanelDisplay: !this.state.morePanelDisplay,
    });
  };

  displayMoreItems() {
    if (!this.state.morePanelDisplay)
      return (
        <MenuItem
          key={3}
          icon="fa-angles-down"
          title="More"
          onClick={this.toggleMorePanelDisplay}
        />
      );

    return [
      <MenuItem
        key={3}
        icon="fa-chart-line"
        title="Analytics"
        onClick={() =>
          this.props.setMainContainer(
            <AnalyticsContainer
              setMainContainer={this.props.setMainContainer}
            />
          )
        }
      />,

      <MenuItem
        key={4}
        icon="fa-circle-info"
        title="About us"
        onClick={() =>
          this.props.setMainContainer(
            <AboutUsContainer setMainContainer={this.props.setMainContainer} />
          )
        }
      />,

      <MenuItem
        key={5}
        icon="fa-angles-up"
        title="Less"
        onClick={this.toggleMorePanelDisplay}
      />,
    ];
  }

  render() {
    let items = [];
    if (this.state.token) {
      items.push(
        <MenuItem
          key={0}
          title="Home"
          icon="fa-house"
          onClick={() =>
            this.props.setMainContainer(
              <FeedContainer setMainContainer={this.props.setMainContainer} />
            )
          }
        />
      );

      items.push(
        <MenuItem
          key={1}
          title="Notifications"
          icon="fa-bell"
          onClick={() =>
            this.props.setMainContainer(
              <NotificationsContainer
                setMainContainer={this.props.setMainContainer}
              />
            )
          }
        />
      );

      items.push(
        <MenuItem
          key={2}
          title="Profile"
          icon="fa-user"
          onClick={() =>
            this.props.setMainContainer(
              <ProfileContainer
                setMainContainer={this.props.setMainContainer}
              />
            )
          }
        />
      );

      items.push(this.displayMoreItems());
    }

    return (
      <aside className="menu">
        <Logo />
        <div className="items">{items}</div>
        <ToggleConnection setPage={this.props.setPage} />
      </aside>
    );
  }
}

export default MenuContainer;
