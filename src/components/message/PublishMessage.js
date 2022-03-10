import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageActions from "./MessageActions";
import Icon from "../Icon";
import { ImagePicker } from "react-file-picker";
import ImageHolder from "./ImageHolder";

class PublishMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
    };

    this.setState = this.setState.bind(this);
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
          ></div>
          {this.state.image && <ImageHolder image={this.state.image} />}
        </div>

        <MessageActions hasButton={true}>
          <Icon name="fa-face-smile" size="fa-xl" />
          <ImagePickerContainer setState={this.setState} />
          <Icon name="fa-square-poll-vertical" size="fa-xl" />
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
