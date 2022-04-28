import React from "react";
import UsersList from "../UsersList";
import MessagesList from "../MessagesList";

class SearchContainer extends React.Component {
  render() {
    return <div className="central-container">{this.getResults()}</div>;
  }

  getResults() {
    let resultComponent = <NotFound query={this.props.query} />;

    let query = this.props.query;
    const regex = /@(.*)/g;

    if (query.match(regex)) {
      // TODO: get from server
      const users = [];
      if (users.length > 0)
        resultComponent = (
          <UsersResult
            users={users}
            setMainContainer={this.props.setMainContainer}
            setPage={this.props.setPage}
          />
        );
    } else {
      // TODO: get from server

      const messages = [];
      if (messages.length > 0)
        resultComponent = (
          <MessagesResult
            messages={messages}
            setMainContainer={this.props.setMainContainer}
            setPage={this.props.setPage}
          />
        );
    }

    return resultComponent;
  }
}

const MessagesResult = (props) => {
  return (
    <MessagesList
      messages={props.messages}
      setMainContainer={props.setMainContainer}
      setPage={props.setPage}
    />
  );
};

const UsersResult = (props) => {
  return (
    <UsersList
      users={props.users}
      setMainContainer={props.setMainContainer}
      setPage={props.setPage}
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