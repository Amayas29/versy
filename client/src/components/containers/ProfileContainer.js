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
        console.log(err);
      });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    this.refresh();
  }

  refresh() {
    let id = "";
    if (this.props.user) id = this.props.user._id;
    else id = this.state.user._id;

    this.setState({
      messages: [],
      user: null,
    });

    axios
      .get(`http://localhost:4000/api/users/${id}`)
      .then((res) => {
        this.setState({ user: res.data.user });
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    axios
      .get(`http://localhost:4000/api/messages/user/${id}`)
      .then((res) => {
        this.setState({ messages: res.data.messages });
      })
      .catch((err) => {
        console.log(err.response.data);
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
