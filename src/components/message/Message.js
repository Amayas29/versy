import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageContent from "./MessageContent";
import MessageActions from "./MessageActions";
import MessageHeader from "./MessageHeader";
import MessageAction from "./MessageAction";
import MessageViewContainer from "../containers/MessageViewContainer";
import Popup from "reactjs-popup";
import Icon from "../Icon";
import MessageOptions from "./MessageOptions";

class Message extends React.Component {
  render() {
    return (
      <article className="message">
        <Popup
          trigger={
            <div className="message-options">
              <Icon name="fa-ellipsis-h" size="fa-xl" />
            </div>
          }
          closeOnDocumentClick
          closeOnEscape
          position="bottom right"
        >
          <MessageOptions />
        </Popup>

        <MessageAvatar
          user={this.props.data.user}
          setMainContainer={this.props.setMainContainer}
        />
        <MessageHeader
          message={this.props.data}
          setMainContainer={this.props.setMainContainer}
        />
        <MessageContent message={this.props.data} />
        <MessageActions>
          <MessageAction
            name="fa-comment"
            list={this.props.data.comments}
            onClick={() => {
              this.props.setMainContainer(
                <MessageViewContainer
                  message={this.props.data}
                  setMainContainer={this.props.setMainContainer}
                />
              );
            }}
          />
          <MessageAction name="fa-heart" list={this.props.data.likes} />
          <MessageAction name="fa-share" list={this.props.data.shares} />
        </MessageActions>
      </article>
    );
  }
}

export default Message;
