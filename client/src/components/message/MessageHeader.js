import React from "react";
import timeElapsed from "../../utils/DateUtils";
import ProfileContainer from "../containers/ProfileContainer";
import moment from "moment";
import Icon from "../Icon";
import MessageOptions from "./MessageOptions";
import Popup from "reactjs-popup";
import getCookie from "../../utils/Cookies";
import { getUser } from "../../data/data";

const MessageHeader = (props) => {
  const date = moment(props.message.publishDate, "DD/MM/YYYY").toDate();
  const time = timeElapsed(date);

  const token = getCookie("token");
  const user = getUser(token);

  return (
    <div className="message-header">
      <span
        onClick={() =>
          props.setMainContainer(
            <ProfileContainer
              user={props.message.user}
              setMainContainer={props.setMainContainer}
              setPage={props.setPage}
            />
          )
        }
      >
        {props.message.user.name}
      </span>
      <span>{props.message.user.username}</span>
      <Icon name="fa-minus" size="fa-xs" />
      <span>{time}</span>

      {user && props.message.user.id === user.id && (
        <div className="message-options">
          <Popup
            trigger={<Icon name="fa-ellipsis-h" size="fa-xl" />}
            closeOnDocumentClick
            closeOnEscape
            position="bottom right"
          >
            {(close) => <MessageOptions close={close} />}
          </Popup>
        </div>
      )}
    </div>
  );
};

export default MessageHeader;
