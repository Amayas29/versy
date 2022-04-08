import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageActions from "./MessageActions";
import Icon from "../Icon";
import ImagePickerContainer from "../ImagePickerContainer";
import ImageHolder from "./ImageHolder";
import Picker from "emoji-picker-react";
import Popup from "reactjs-popup";
import dateFormat from "dateformat";

class PublishMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
    };

    this.setState = this.setState.bind(this);
    this.onEmojiClick = this.onEmojiClick.bind(this);

    this.inputRef = React.createRef();

    this.publish = this.publish.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  onEmojiClick(event, emojiObject) {
    this.setState((prevState) => {
      this.inputRef.current.textContent =
        this.inputRef.current.textContent + emojiObject.emoji;
      this.positionCursor();
      return prevState;
    });
  }

  positionCursor() {
    // Move cursor to end of this.inputRef.current
    const range = document.createRange();
    const sel = window.getSelection();

    console.log(this.inputRef.current.childNodes);
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
          setPage={this.props.setPage}
        />
        <div className="message-content">
          <div
            className="message-input"
            contentEditable="true"
            spellCheck="false"
            data-placeholder="What's happening?"
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
    const content = this.inputRef.current.textContent;
    if (!content && !this.state.image) return;

    this.props.publish(
      {
        id: Math.floor(Math.random() * 1000000) + 10000,
        content: content,
        image: this.state.image,
        user: this.props.user,
        publishDate: dateFormat(new Date(), "dd/mm/yyyy"),
        likes: [],
        isComment: this.props.isComment,
        comments: [],
      },
      this.props.user.id
    );

    this.inputRef.current.textContent = "";

    this.setState({
      image: "",
    });
  }
}

export default PublishMessage;
