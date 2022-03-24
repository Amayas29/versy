import React from "react";
import UserBanner from "../profile/UserBanner";
import MessagesList from "../MessagesList";

import { getUser, getUserMessages } from "../../data/data";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "0",
      profileVue: null,
      mainProfileVue: true,
    };

    this.setProfileVue = this.setProfileVue.bind(this);
  }

  refreshProfileVue(props) {
    const user = props.user || getUser(this.state.token);
    const messages = getUserMessages(user.id);

    this.setState({
      profileVue: (
        <MessagesList
          messages={messages}
          setMainContainer={props.setMainContainer}
        />
      ),
      mainProfileVue: true,
    });
  }

  componentDidMount() {
    this.refreshProfileVue(this.props);
  }

  setProfileVue(vue, mainProfileVue) {
    this.setState({
      profileVue: vue,
      mainProfileVue: mainProfileVue,
    });
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.refreshProfileVue(props);
  }

  render() {
    const user = this.props.user || getUser(this.state.token);

    return (
      <section className="central-container">
        <UserBanner
          user={user}
          setProfileVue={this.setProfileVue}
          mainProfileVue={this.state.mainProfileVue}
          setMainContainer={this.props.setMainContainer}
        />
        {this.state.profileVue}
      </section>
    );
  }
}

export default ProfileContainer;
