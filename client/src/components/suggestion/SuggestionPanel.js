import React from "react";
import UsersList from "../UsersList";
import Icon from "../Icon";
import AllSuggestionContainer from "../containers/AllSuggestionContainer";
import axios from "axios";

class SuggestionPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  UNSAFE_componentWillReceiveProps(_nextProps) {
    axios
      .get("http://localhost:4000/api/users/suggest")
      .then((res) => {
        this.setState({ users: res.data.users.slice(0, 4) });
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  render() {
    const users = this.state.users;
    const props = this.props;
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
  }
}

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
