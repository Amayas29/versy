import React from "react";
import Icon from "../Icon";
import axios from "axios";

const MessageOptions = (props) => {
  return (
    <div className="message-options-popup">
      <div
        className="message-option"
        onClick={() => {
          axios
            .delete(`http://localhost:4000/api/messages/${props.id}`)
            .then((_res) => {
              props.refresh();
              props.close();
            })
            .catch((err) => {
              // console.dir(err);
            });
        }}
      >
        Delete
        <Icon name="fa-trash-can" size="fa-lg" />
      </div>
    </div>
  );
};

export default MessageOptions;
