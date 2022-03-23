import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageActions from "./MessageActions";
import Icon from "../Icon";
import ImagePickerContainer from "../ImagePickerContainer";
import ImageHolder from "./ImageHolder";
import Picker from "emoji-picker-react";
import Popup from "reactjs-popup";

class PublishMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      content: "",
    };

    this.setState = this.setState.bind(this);
    this.onEmojiClick = this.onEmojiClick.bind(this);

    this.inputRef = React.createRef();

    this.publish = this.publish.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  onEmojiClick(event, emojiObject) {
    this.setState((prevState) => {
      this.inputRef.current.textContent = prevState.content + emojiObject.emoji;
      this.positionCursor();

      return {
        content: prevState.content + emojiObject.emoji,
      };
    });
  }

  positionCursor() {
    // Move cursor to end of this.inputRef.current
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(
      this.inputRef.current.childNodes[0],
      this.inputRef.current.textContent.length
    );
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  getImage(base64) {
    this.setState({
      image: base64,
    });
  }

  render() {
    return (
      <article className="message publish">
        <MessageAvatar
          user={this.props.user}
          setMainContainer={this.props.setMainContainer}
        />
        <div className="message-content">
          <div
            className="message-input"
            contentEditable="true"
            spellCheck="false"
            data-placeholder="What's happening?"
            onInput={(e) => {
              this.setState({ content: e.target.innerText });
            }}
            ref={this.inputRef}
          ></div>

          {this.state.image && <ImageHolder image={this.state.image} />}
        </div>

        <MessageActions hasButton={true} publish={this.publish}>
          <Popup
            trigger={<Icon name="fa-face-smile" size="fa-xl" />}
            position="bottom left"
          >
            <Picker onEmojiClick={this.onEmojiClick} />
          </Popup>

          <ImagePickerContainer getImage={this.getImage} icon="fa-image" />
          {this.state.image && (
            <Icon
              name="fa-xmark"
              size="fa-xl"
              onClick={() => {
                this.setState({ image: "" });
              }}
            />
          )}
        </MessageActions>
      </article>
    );
  }

  publish() {
    if (!this.state.content && !this.state.image) return;

    this.props.publish({
      user: this.props.user,
      content: this.state.content,
      image: this.state.image,
      publishDate: new Date(),
      likes: [],
      comments: [],
      shares: [],
    });

    this.inputRef.current.textContent = "";

    this.setState({
      content: "",
      image: "",
    });
  }
}

export default PublishMessage;
