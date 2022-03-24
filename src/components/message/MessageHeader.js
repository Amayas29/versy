import React from "react";
import timeElapsed from "../../utils/DateUtils";
import ProfileContainer from "../containers/ProfileContainer";
import moment from "moment";
import Icon from "../Icon";
import MessageOptions from "./MessageOptions";
import Popup from "reactjs-popup";

const MessageHeader = (props) => {
  const date = moment(props.message.publishDate, "DD/MM/YYYY").toDate();
  const time = timeElapsed(date);

  return (
    <div className="message-header">
      <span
        className="break"
        onClick={() =>
          props.setMainContainer(
            <ProfileContainer
              user={props.message.user}
              setMainContainer={props.setMainContainer}
            />
          )
        }
      >
        {props.message.user.name}
      </span>
      <span className="break">{props.message.user.username}</span>
      <Icon name="fa-minus" size="fa-xs" />
      <span>{time}</span>
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
    </div>
  );
};

export default MessageHeader;
