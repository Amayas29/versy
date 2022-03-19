import React from "react";
import Message from "../message/Message";
import MinimalUser from "../MinimalUser";
import avatar from "../../assets/images/avatar.jpg";

const u = {
  id: 1,
  avatar: avatar,
  name: "Amayas",
  username: "@sadi",
  bio:
    "Hey bro how are u ? I am fine, and you ? :) what about you ? :) where are you from ? :) Hey bro how are u ? I am fine, and you ? :) what about you ? :) where are you from ? :) Hey bro how are u ? I am fine, and you ? :) what about you ? :) where are you from ? :) Hey bro how are u ? I am fine, and you ? :) what about you ? :) where are you from ? :)",
  birthday: new Date(2001, 4, 29),
  location: "Paris, France",
  joinedDate: new Date(2019, 6, 1),
};

let users = [u, u, u, u, u, u, u, u, u];

let messages = [
  {
    content: "Hey bro",
    image: avatar,
    user: u,
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  },

  {
    content: "Hey bro",
    image: avatar,
    user: u,
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  },

  {
    content: "Hey bro",
    image: avatar,
    user: u,
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  },

  {
    content: "Hey bro",
    image: avatar,
    user: u,
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  },
];

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

    return resultComponent;
  }
}

const SearchUser = (props) => {
  return (
    <li className="user-list-item">
      <MinimalUser
        key={props.index}
        user={props.user}
        setMainContainer={props.setMainContainer}
      />
      <span className="user-list-item-bio">{props.user.bio}</span>
    </li>
  );
};

const MessagesResult = (props) => {
  return (
    <ul className="message-list">
      {props.messages.map((message, index) => (
        <Message
          key={index}
          data={message}
          setMainContainer={props.setMainContainer}
        />
      ))}
    </ul>
  );
};

const UsersResult = (props) => {
  return (
    <ul className="user-list">
      {props.users.map((user, index) => (
        <SearchUser
          key={index}
          user={user}
          setMainContainer={props.setMainContainer}
        />
      ))}
    </ul>
  );
};

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <span className="no-results">No results for "{props.query}"</span>
      <span className="result-info">
        The term you entered did not bring up any results. You may have made a
        typing error or used the incorrect filter (@ for user search)
      </span>
    </div>
  );
};

export default SearchContainer;
