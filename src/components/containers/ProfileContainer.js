import React from "react";
import Message from "../message/Message";
import timeElapsed from "../../utils/DateUtils";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages,
      user: props.user,
    };
  }

  render() {
    return (
      <section className="central-container">
        <ul className="message-list">
          {this.state.messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              avatar={message.avatar}
              name={message.name}
              username={message.username}
              time={timeElapsed(message.time)}
              likes={message.likes}
              comments={message.comments}
              shares={message.shares}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default ProfileContainer;
