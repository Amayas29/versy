import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageContent from "./MessageContent";
import MessageActions from "./MessageActions";
import MessageHeader from "./MessageHeader";
import MessageAction from "./MessageAction";
import MessageViewContainer from "../containers/MessageViewContainer";
import Popup from "reactjs-popup";
import MessageLikes from "./MessageLikes";
import { getUser } from "../../data/data";
class Message extends React.Component {
  render() {
    const likes = [getUser("1"), getUser("2"), getUser("3"), getUser("4")];

    return (
      <article className="message">
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
          {this.props.data.isComment || (
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
          )}
          <Popup
            trigger={
              <MessageAction name="fa-heart" list={this.props.data.likes} />
            }
            modal
            closeOnDocumentClick
            closeOnEscape
          >
            <MessageLikes
              likes={likes}
              setMainContainer={this.props.setMainContainer}
            />
          </Popup>
        </MessageActions>
      </article>
    );
  }
}

export default Message;
