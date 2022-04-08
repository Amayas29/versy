import React from "react";
import UserBanner from "../profile/UserBanner";
import MessagesList from "../MessagesList";

import { getUser, getUserMessages } from "../../data/data";
import getCookie from "../../utils/Cookies";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profileVue: null,
      mainProfileVue: true,
    };

    this.setProfileVue = this.setProfileVue.bind(this);
  }

  refreshProfileVue(props) {
    const token = getCookie("token");
    const user = props.user || getUser(token);
    const messages = getUserMessages(user.id);

    this.setState({
      profileVue: (
        <MessagesList
          messages={messages}
          setMainContainer={props.setMainContainer}
          setPage={props.setPage}
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
    const token = getCookie("token");
    const user = this.props.user || getUser(token);

    return (
      <section className="central-container">
        <UserBanner
          user={user}
          setProfileVue={this.setProfileVue}
          mainProfileVue={this.state.mainProfileVue}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />
        {this.state.profileVue}
      </section>
    );
  }
}

export default ProfileContainer;
