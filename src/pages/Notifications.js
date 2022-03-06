import React from "react";
import MenuContainer from "../components/containers/MenuContainer";
import MainContainer from "../components/containers/MainContainer";
import NotificationsContainer from "../components/containers/NotificationsContainer";
import logo from "../assets/images/avatar.jpg";

const Profile = (props) => {
  return (
    <div className="app">
      <MenuContainer setPage={props.setPage} token={props.token} />
      <MainContainer token={props.token}>
        <NotificationsContainer
          token={props.token}
          user={{
            avatar: logo,
            name: "Amayas",
            username: "@amayas29",
            bio: "Hey",
          }}
          notifications={[]}
        />
      </MainContainer>
    </div>
  );
};

export default Profile;
