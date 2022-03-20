import React from "react";
import ImagePickerContainer from "../ImagePickerContainer";
import dateFormat from "dateformat";
import Icon from "../Icon";
import moment from "moment";
import ProfileContainer from "../containers/ProfileContainer";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      editDate: false,
      day: null,
      month: null,
      year: null,
    };

    this.getImage = this.getImage.bind(this);
    this.editUserInformations = this.editUserInformations.bind(this);
    this.toggleEditDate = this.toggleEditDate.bind(this);
    this.editDateInformations = this.editDateInformations.bind(this);
    this.editDate = this.editDate.bind(this);
  }

  getImage(base64) {
    this.editUserInformations("avatar", base64);
  }

  editUserInformations(attirbut, value) {
    this.setState({
      user: {
        ...this.state.user,
        [attirbut]: value,
      },
    });
  }

  editDateInformations(attirbut, value) {
    this.setState({
      [attirbut]: value,
    });
  }

  toggleEditDate() {
    this.setState({
      editDate: !this.state.editDate,
    });
  }

  editDate() {
    const day = this.state.day;
    const month = this.state.month;
    const year = this.state.year;

    if (!day || !month || !year) return;

    let birthday = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");

    if (!birthday.isValid()) {
      alert("Birthday is not valid");
      return;
    }

    birthday = birthday.toDate();

    if (birthday.getTime() > Date.now()) {
      alert("Birthday can't be in the future");
      return;
    }

    this.editUserInformations("birthday", birthday);
    this.toggleEditDate();
  }

  render() {
    const user = this.state.user;

    return (
      <div className="edit-profile">
        <div
          className="btn edit-save"
          onClick={() => {
            // save the user
            this.props.setMainContainer(
              <ProfileContainer
                user={this.state.user}
                setMainContainer={this.props.setMainContainer}
              />
            );

            this.props.close();
          }}
        >
          Save
        </div>
        <div className="edit-avatar">
          <img className="user-avatar" src={user.avatar} alt="avatar" />

          <ImagePickerContainer
            getImage={this.getImage}
            icon="fa-camera-rotate"
          />
        </div>

        <EditInputComponent
          name="Name"
          value={user.name}
          editUserInformations={this.editUserInformations}
          attirbut="name"
        />

        <EditInputComponent
          name="Bio"
          value={user.bio}
          editUserInformations={this.editUserInformations}
          attirbut="bio"
        />

        <EditInputComponent
          name="Location"
          value={user.location}
          editUserInformations={this.editUserInformations}
          attirbut="location"
        />

        <div className="edit-input-container">
          <span>Birthday</span>

          <div className="edit-birthday">
            <span>{dateFormat(user.birthday, "mmm d, yyyy")}</span>
            <Icon
              name="fa-pen-to-square"
              size="fa-lg"
              onClick={this.toggleEditDate}
            />
          </div>
        </div>

        {this.state.editDate && (
          <div className="date-editor">
            <DateField
              name="Day"
              min="1"
              max="31"
              editDateInformations={this.editDateInformations}
            />
            <DateField
              name="Month"
              min="1"
              max="12"
              editDateInformations={this.editDateInformations}
            />

            <DateField
              name="Year"
              editDateInformations={this.editDateInformations}
            />

            <Icon
              name="fa-calendar-check"
              size="fa-lg"
              onClick={this.editDate}
            />
          </div>
        )}
      </div>
    );
  }
}

const DateField = (props) => {
  return (
    <div className="date-field">
      <span>{props.name}</span>
      <input
        className="edit-input"
        type="number"
        min={props.min}
        max={props.max}
        onChange={(event) => {
          props.editDateInformations(
            props.name.toLowerCase(),
            event.target.value
          );
        }}
      />
    </div>
  );
};

const EditInputComponent = (props) => {
  return (
    <div className="edit-input-container">
      <span>{props.name}</span>
      <input
        className="edit-input"
        value={props.value}
        onChange={(event) => {
          props.editUserInformations(props.attirbut, event.target.value);
        }}
      />
    </div>
  );
};

export default EditProfile;
