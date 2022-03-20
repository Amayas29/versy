import React from "react";
import PublishMessage from "../message/PublishMessage";
import MessagesList from "../MessagesList";
import avatar from "../../assets/images/avatar.jpg";

const user = {
  id: 1,
  avatar: avatar,
  name: "Amayas",
  username: "@sadi",
  bio: "Hey bro",
  birthday: new Date(2001, 4, 29),
  location: "Paris, France",
  joinedDate: new Date(2019, 6, 1),
};

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    // get from server
    const messages = [
      {
        content: "Hello world Hey",
        image: avatar,
        user: user,
        publishDate: new Date(),
        likes: [],
        comments: [],
        shares: [],
      },
      {
        content: "Hello world Hey",
        image: avatar,
        user: user,
        publishDate: new Date(),
        likes: [],
        comments: [],
        shares: [],
      },
      {
        content: "Hello world Hey",
        image: avatar,
        user: user,
        publishDate: new Date(),
        likes: [],
        comments: [],
        shares: [],
      },
      {
        content: "Hello world Hey",
        image: avatar,
        user: user,
        publishDate: new Date(),
        likes: [],
        comments: [],
        shares: [],
      },
      {
        content: "Hello world Hey",
        image: avatar,
        user: user,
        publishDate: new Date(),
        likes: [],
        comments: [],
        shares: [],
      },
      {
        content: "Hello world Hey",
        image: avatar,
        user: user,
        publishDate: new Date(),
        likes: [],
        comments: [],
        shares: [],
      },
      {
        content: "Hello world Hey",
        image: avatar,
        user: user,
        publishDate: new Date(),
        likes: [],
        comments: [],
        shares: [],
      },
      {
        content: "Hello world Hey",
        image: avatar,
        user: user,
        publishDate: new Date(),
        likes: [],
        comments: [],
        shares: [],
      },
    ];

    this.state = {
      token: "a",
      messages: messages,
    };

    this.publish = this.publish.bind(this);
  }

  render() {
    return (
      <section className="central-container">
        {this.state.token && (
          <PublishMessage
            user={user}
            setMainContainer={this.props.setMainContainer}
            publish={this.publish}
          />
        )}

        <MessagesList
          messages={this.state.messages}
          setMainContainer={this.props.setMainContainer}
        />
      </section>
    );
  }

  publish(message) {
    // push to server
    this.setState({
      messages: [message, ...this.state.messages],
    });
  }
}

export default FeedContainer;
