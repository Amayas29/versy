import React from "react";
import axios from "axios";
import Notification from "../notifications/Notification";
class NotificationsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  UNSAFE_componentWillMount() {
    const token = localStorage.getItem("token");
    axios.get(`http://localhost:4000/api/token/${token}`).then((res) => {
      const user_id = res.user_id;
      axios
        .get(`http://localhost:4000/api/notifications/${user_id}`)
        .then((notifications_res) => {
          this.setState({ notifications: notifications_res.notifications });
        });
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
