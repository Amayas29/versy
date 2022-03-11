import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageActions from "./MessageActions";
import Icon from "../Icon";
import { ImagePicker } from "react-file-picker";
import ImageHolder from "./ImageHolder";
import Picker from "emoji-picker-react";

class PublishMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      content: "",
      showEmojiPicker: false,
      emojiPickerTop: 0,
      emojiPickerLeft: 0,
    };

    this.setState = this.setState.bind(this);
    this.onEmojiClick = this.onEmojiClick.bind(this);

    this.emojiRectRef = React.createRef();
    this.inputRef = React.createRef();
  }

  onEmojiClick(event, emojiObject) {
    this.setState((prevState) => {
      this.inputRef.current.focus();
      this.inputRef.current.textContent = "";
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

  render() {
    return (
      <article className="message publish">
        <MessageAvatar user={this.props.user} />
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

        <MessageActions hasButton={true}>
          <Icon
            name="fa-face-smile"
            size="fa-xl"
            ref={this.emojiRectRef}
            onClick={() => {
              this.setState({
                emojiPickerTop:
                  this.emojiRectRef.current.getBoundingClientRect().top + 5,
                emojiPickerLeft:
                  this.emojiRectRef.current.getBoundingClientRect().left + 15,
                showEmojiPicker: !this.state.showEmojiPicker,
              });
            }}
          />

          {this.state.showEmojiPicker && (
            <div
              style={{
                position: "fixed",
                top: this.state.emojiPickerTop,
                left: this.state.emojiPickerLeft,
                zIndex: "99",
              }}
              onMouseLeave={() => {
                this.setState({ showEmojiPicker: false });
              }}
            >
              <Picker onEmojiClick={this.onEmojiClick} />
            </div>
          )}

          <ImagePickerContainer setState={this.setState} />
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

  componentDidMount() {
    this.setState({
      emojiPickerTop: this.emojiRectRef.current.getBoundingClientRect().top + 5,
      emojiPickerLeft:
        this.emojiRectRef.current.getBoundingClientRect().left + 15,
    });
  }
}

const ImagePickerContainer = (props) => {
  return (
    <ImagePicker
      extensions={["jpg", "jpeg", "png"]}
      onChange={(base64) => {
        props.setState({ image: base64 });
      }}
      dims={{
        minWidth: 0,
        maxWidth: 40000,
        minHeight: 0,
        maxHeight: 40000,
      }}
      onError={(errMsg) => {
        alert(errMsg);
      }}
    >
      <button className="icon fa-solid fa-image fa-xl hide"></button>
    </ImagePicker>
  );
};

export default PublishMessage;
