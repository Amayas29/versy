import React from "react";
import timeElapsed from "../../utils/DateUtils";
import ProfileContainer from "../containers/ProfileContainer";
import Icon from "../Icon";
import MessageOptions from "./MessageOptions";
import Popup from "reactjs-popup";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";

class MessageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      sender: null,
    };
  }

  UNSAFE_componentWillMount() {
    const token = Cookies.get("access_token");
    axios
      .get(`http://localhost:4000/api/token/${token}`)
      .then((res) => {
        this.setState({ user: res.data.user });
      })
      .catch((err) => {
        console.dir(err);
      });

    axios
      .get(`http://localhost:4000/api/users/${this.props.message.user}`)
      .then((res) => {
        this.setState({ sender: res.data.user });
      });
  }

  render() {
    const props = this.props;
    const date = moment(
      props.message.publishDate,
      "DD/MM/YYYY HH:mm:ss"
    ).toDate();
    console.log(date);
    console.log(props.message.publishDate);
    const time = timeElapsed(date);

    const user = this.state.user;
    const sender = this.state.sender;

    const options = props.options === undefined ? true : props.options;

    if (!sender) return <></>;

    return (
      <div className="message-header">
        <span
          onClick={() =>
            props.setMainContainer(
              <ProfileContainer
                user={sender}
                setMainContainer={props.setMainContainer}
                setPage={props.setPage}
              />
            )
          }
        >
          {sender.name}
        </span>
        <span>{sender.username}</span>
        <Icon name="fa-minus" size="fa-xs" />
        <span>{time}</span>

        {user && sender._id === user._id && options === true && (
          <div className="message-options">
            <Popup
              trigger={<Icon name="fa-ellipsis-h" size="fa-xl" />}
              closeOnDocumentClick
              closeOnEscape
              position="bottom right"
            >
              {(close) => (
                <MessageOptions
                  refresh={this.props.refresh}
                  close={close}
                  id={props.message._id}
                />
              )}
            </Popup>
          </div>
        )}
      </div>
    );
  }
}
export default MessageHeader;
