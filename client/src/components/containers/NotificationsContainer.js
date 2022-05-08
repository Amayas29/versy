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
    axios
      .get("http://localhost:4000/api/notifications")
      .then((res) => {
        this.setState({ notifications: res.data.notifications });
      })
      .catch((err) => {
        // console.dir(err);
      });
  }

  render() {
    const props = this.props;
    return (
      <div className="central-container">
        {this.state.notifications.map((notification, index) => (
          <Notification
            key={index}
            notification={notification}
            setMainContainer={props.setMainContainer}
            setPage={props.setPage}
          />
        ))}

        {this.state.notifications.length === 0 && (
          <div className="no-notifications">No notifications found</div>
        )}
      </div>
    );
  }
}

export default NotificationsContainer;
