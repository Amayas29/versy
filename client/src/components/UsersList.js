import axios from "axios";
import React from "react";
import AuthentificationLayout from "../layouts/AuthentificationLayout";
import ProfileContainer from "./containers/ProfileContainer";
import Cookies from "js-cookie";

const UsersList = (props) => {
  if (!props.users || props.users.length === 0)
    return <div className="no-users">No users found</div>;

  return (
    <ul className="user-list">
      {props.users.map((user, index) => (
        <UserVue
          key={index}
          data={user}
          setMainContainer={props.setMainContainer}
          hasBio={props.hasBio}
          hasButton={props.hasButton}
          setPage={props.setPage}
        />
      ))}
      {props.more}
    </ul>
  );
};

const redirectUserProfile = (user, setMainContainer, setPage) => {
  setMainContainer(
    <ProfileContainer
      user={user}
      setMainContainer={setMainContainer}
      setPage={setPage}
    />
  );
};

class UserVue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  UNSAFE_componentWillMount() {
    const token = Cookies.get("access_token");

    axios
      .get(`http://localhost:4000/api/token/${token}`)
      .then((res) => {
        this.setState({ user: res.data.user });
      })
      .catch((err) => {
        console.dir(err.response.data);
      });
  }

  render() {
    const props = this.props;
    const user = this.state.user;
    const token = Cookies.get("access_token");

    return (
      <li className="user-list-item">
        <div className="minimal-user-container">
          <div className="minimal-user">
            <img
              className="minimal-user-avatar"
              src={props.data.avatar}
              alt="avatar"
              onClick={() => {
                redirectUserProfile(
                  props.data,
                  props.setMainContainer,
                  props.setPage
                );
              }}
            />
            <div className="minimal-user-info">
              <span
                onClick={() =>
                  redirectUserProfile(
                    props.data,
                    props.setMainContainer,
                    props.setPage
                  )
                }
              >
                {props.data.name}
              </span>
              <span>{props.data.username}</span>
            </div>
          </div>
          {this.props.hasButton && user && user._id !== props.data._id && (
            <div
              className="btn"
              onClick={() => {
                if (token) {
                  return;
                }

                props.setPage(
                  <AuthentificationLayout setPage={props.setPage} />
                );
              }}
            >
              Follow
            </div>
          )}
        </div>
        {props.hasBio && (
          <span className="user-list-item-bio">{props.data.bio}</span>
        )}
      </li>
    );
  }
}

export default UsersList;
