import React from "react";
import UsersList from "../UsersList";
import MessagesList from "../MessagesList";
import { getUser, getUserMessages } from "../../data/data";

let users = [];
for (let i = 0; i < 3; i++) users.push(getUser(`${i}`));

let messages = [];
for (let i = 0; i < 3; i++) messages.push(...getUserMessages(`${i}`));

class SearchContainer extends React.Component {
  render() {
    return <div className="central-container">{this.getResults()}</div>;
  }

  getResults() {
    let resultComponent = <NotFound query={this.props.query} />;

    let query = this.props.query;
    const regex = /@(.*)/g;

    if (query.match(regex)) {
      // get from server
      if (users.length > 0)
        resultComponent = (
          <UsersResult
            users={users}
            setMainContainer={this.props.setMainContainer}
          />
        );
    } else {
      // get from server
      if (messages.length > 0)
        resultComponent = (
          <MessagesResult
            messages={messages}
            setMainContainer={this.props.setMainContainer}
          />
        );
    }

    resultComponent = <NotFound query={this.props.query} />;

    return resultComponent;
  }
}

const MessagesResult = (props) => {
  return (
    <MessagesList
      messages={props.messages}
      setMainContainer={props.setMainContainer}
    />
  );
};

const UsersResult = (props) => {
  return (
    <UsersList
      users={props.users}
      setMainContainer={props.setMainContainer}
      hasBio={true}
    />
  );
};

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <span className="no-results break">No results for "{props.query}"</span>
      <span className="result-info">
        The term you entered did not bring up any results. You may have made a
        typing error or used the incorrect filter (@ for user search)
      </span>
    </div>
  );
};

export default SearchContainer;
