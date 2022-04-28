import React from "react";
import UserBanner from "../profile/UserBanner";
import MessagesList from "../MessagesList";
import axios from "axios";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      messages: null,
      profileVue: null,
      mainProfileVue: true,
    };

    this.setProfileVue = this.setProfileVue.bind(this);
  }

  UNSAFE_componentWillMount() {
    const token = localStorage.getItem("token");
    axios.get(`http://localhost:4000/api/token/${token}`).then((res) => {
      const user_id = res.user_id;

      axios
        .get(`http://localhost:4000/api/users/${user_id}`)
        .then((user_res) => {
          this.setState({ user: user_res.user });

          axios
            .get(`http://localhost:4000/api/messages/${user_id}`)
            .then((messages_res) => {
              this.setState({ messages: messages_res.messages });
            });
        });
    });
  }

  refreshProfileVue(props) {
    // TODO: get messages
    const messages = [];

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
    const user = this.props.user || this.state.user;

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
