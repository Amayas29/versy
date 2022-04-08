import React from "react";
import UsersList from "../UsersList";
import { getUser } from "../../data/data";
import Icon from "../Icon";
import AllSuggestionContainer from "../containers/AllSuggestionContainer";

const users = [getUser("1"), getUser("2"), getUser("3"), getUser("4")];

const SuggestionPanel = (props) => {
  return (
    <div className="suggestion-panel">
      <div className="suggestion-panel-header">You may know</div>
      <UsersList
        users={users}
        setMainContainer={props.setMainContainer}
        setPage={props.setPage}
        more={<More setMainContainer={props.setMainContainer} />}
      />
    </div>
  );
};

const More = (props) => {
  return (
    <div
      className="suggestion-panel-more"
      onClick={() =>
        props.setMainContainer(
          <AllSuggestionContainer
            setMainContainer={props.setMainContainer}
            setPage={props.setPage}
          />
        )
      }
    >
      <Icon name="fa-angles-right" size="fa-xl" />
      <span>Show more</span>
    </div>
  );
};

export default SuggestionPanel;
