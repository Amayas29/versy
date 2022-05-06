import React from "react";
import axios from "axios";
import Notification from "../notifications/Notification";
import Cookies from "js-cookie";

class NotificationsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  UNSAFE_componentWillMount() {
    const token = Cookies.get("access_token");
    axios
      .get(`http://localhost:4000/api/token/${token}`)
      .then((res) => {
        const user = res.data.user;
        // TODO ?
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  render() {
    const props = this.props;
    return (
      <div className="central-container">
        {this.state.notifications.map((notification, index) => (
          <Notification
            key={index}
            user={notification.user}
            message={notification.message}
            type={notification.type}
            setMainContainer={props.setMainContainer}
            setPage={props.setPage}
          />
        ))}
      </div>
    );
  }
}

export default NotificationsContainer;
