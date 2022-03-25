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
      <span>{props.message.user.username}</span>
      <Icon name="fa-minus" size="fa-xs" />
      <span>{time}</span>
      <div className="message-options">
        <Popup
          trigger={<Icon name="fa-ellipsis-h" size="fa-xl" />}
          closeOnDocumentClick
          closeOnEscape
          position="bottom center"
        >
          <MessageOptions />
        </Popup>
      </div>
    </div>
  );
};

export default MessageHeader;
