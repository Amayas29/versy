import React from "react";
import MenuContainer from "../components/containers/MenuContainer";
import MainContainer from "../components/containers/MainContainer";
import NotificationsContainer from "../components/containers/NotificationsContainer";
import logo from "../assets/images/avatar.jpg";
import MorePanel from "../components/more-panel/MorePanel";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "a",
      setPage: props.setPage,
    };
  }

  render() {
    return (
      <div className="app">
        <MenuContainer setPage={this.state.setPage} />
        <MainContainer>
          <NotificationsContainer />
        </MainContainer>
      </div>
    );
  }
}

export default Profile;
