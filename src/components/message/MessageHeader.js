import React from "react";
import timeElapsed from "../../utils/DateUtils";
import ProfileContainer from "../containers/ProfileContainer";
import moment from "moment";

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
      <i className="fa-solid fa-minus"></i>
      <span>{time}</span>
    </div>
  );
};

export default MessageHeader;
