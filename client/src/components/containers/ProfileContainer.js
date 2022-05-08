import React from "react";
import UserBanner from "../profile/UserBanner";
import MessagesList from "../MessagesList";
import axios from "axios";
import Cookies from "js-cookie";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      messages: null,
    };

    this.refresh = this.refresh.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  UNSAFE_componentWillMount() {
    const token = Cookies.get("access_token");
    axios
      .get(`http://localhost:4000/api/token/${token}`)
      .then((res) => {
        this.setState({ user: res.data.user });
        this.refresh();
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    this.refresh();
  }

  refresh() {
    this.setState({
      user: null,
    });

    if (this.props.user) {
      axios
        .get(`http://localhost:4000/api/users/${this.props.user._id}`)
        .then((res) => {
          this.setState({ user: res.data.user });
          this.fetchMessages(this.props.user._id);
        })
        .catch((err) => {
          console.dir(err);
        });

      return;
    }

    const token = Cookies.get("access_token");
    axios
      .get(`http://localhost:4000/api/token/${token}`)
      .then((res) => {
        this.setState({ user: res.data.user });
        this.fetchMessages(res.data.user._id);
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  fetchMessages(id) {
    this.setState({
      messages: [],
    });

    axios
      .get(`http://localhost:4000/api/messages/user/${id}`)
      .then((res) => {
        this.setState({ messages: res.data.messages });
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  render() {
    const user = this.state.user;
    if (!user) return <></>;

    return (
      <section className="central-container">
        <UserBanner
          user={user}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />

        <MessagesList
          messages={this.state.messages}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
          refresh={this.refresh}
        />
      </section>
    );
  }
}

export default ProfileContainer;
