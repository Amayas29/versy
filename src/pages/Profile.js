import React from "react";
import MenuContainer from "../components/containers/MenuContainer";
import MainContainer from "../components/containers/MainContainer";
import ProfileContainer from "../components/containers/ProfileContainer";
import logo from "../assets/images/avatar.jpg";

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
          <ProfileContainer />
        </MainContainer>
      </div>
    );
  }
}

export default Profile;
