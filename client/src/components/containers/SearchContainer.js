import React from "react";
import UsersList from "../UsersList";
import MessagesList from "../MessagesList";
import axios from "axios";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      users: false,
    };
  }

  UNSAFE_componentWillMount() {
    this.refresh(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.refresh(nextProps);
  }

  refresh(props) {
    let query = props.query;
    const regex = /@(.*)/g;

    if (query.match(regex)) {
      query = query.replace("@", "");

      axios
        .get(`http://localhost:4000/api/users/search/${query}`)
        .then((res) => {
          this.setState({ results: res.data.users, users: true });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      axios
        .get(`http://localhost:4000/api/messages/search/${query}`)
        .then((res) => {
          this.setState({ results: res.data.messages, users: false });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }

  render() {
    return <div className="central-container">{this.getResults()}</div>;
  }

  getResults() {
    let resultComponent = <NotFound query={this.props.query} />;

    if (this.state.users) {
      const users = this.state.results;
      if (users.length > 0)
        resultComponent = (
          <UsersList
            users={users}
            setMainContainer={this.props.setMainContainer}
            setPage={this.props.setPage}
            hasBio={true}
          />
        );
    } else {
      const messages = this.state.results;
      if (messages.length > 0)
        resultComponent = (
          <MessagesList
            messages={messages}
            setMainContainer={this.props.setMainContainer}
            setPage={this.props.setPage}
          />
        );
    }

    return resultComponent;
  }
}

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
