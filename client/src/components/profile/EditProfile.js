import React from "react";
import ImagePickerContainer from "../ImagePickerContainer";
import ProfileContainer from "../containers/ProfileContainer";
import Input from "../Input";
import dateFormat from "dateformat";
import moment from "moment";

import {
  validateEmail,
  validatePassword,
  validateName,
  validateDate,
} from "../../utils/Validations";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,

      newPassword: "",
      password: "",

      errors: {
        name: "",
        email: "",
        birthday: "",
        newPassword: "",
        password: "",
      },
    };

    this.getImage = this.getImage.bind(this);
    this.editUserInformations = this.editUserInformations.bind(this);
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

  render() {
    const user = this.state.user;

    let birthday = "";
    if (this.state.user.birthday) {
      birthday = moment(this.state.user.birthday, "DD/MM/YYYY").toDate();
      birthday = dateFormat(birthday, "yyyy-mm-dd");
    }

    return (
      <div className="edit-profile">
        <div
          className="btn edit-save"
          onClick={() => {
            const nameValidator = validateName(user.name);
            const emailValidator = validateEmail(user.email);
            const birthdayValidator = validateDate(user.birthday);

            const newPasswordValidator = validatePassword(
              this.state.newPassword
            );

            const newPasswordMessage = this.state.newPassword
              ? newPasswordValidator.message
              : "";

            let passwordMessage =
              this.state.password === this.state.user.password
                ? ""
                : "Password is incorrect";

            passwordMessage = this.state.newPassword ? passwordMessage : "";

            const errors = {
              name: nameValidator.message,
              email: emailValidator.message,
              password: passwordMessage,
              birthday: birthdayValidator.message,
              newPassword: newPasswordMessage,
            };

            this.setState({
              errors: errors,
            });

            if (
              nameValidator.status &&
              emailValidator.status &&
              newPasswordMessage === "" &&
              passwordMessage === "" &&
              birthdayValidator.status
            ) {
              const editedUser = this.state.user;
              editedUser.password = this.state.newPassword;

              // save the user
              this.props.setMainContainer(
                <ProfileContainer
                  user={editedUser}
                  setMainContainer={this.props.setMainContainer}
                  setPage={this.props.setPage}
                />
              );

              this.props.close();
            }
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

        <Input
          name="name"
          label="Name"
          icon="fa-signature"
          type="text"
          value={user.name}
          error={this.state.errors.name}
          handleChange={(event) =>
            this.editUserInformations("name", event.target.value)
          }
        />

        <Input
          name="email"
          label="Email"
          icon="fa-envelope"
          type="email"
          value={user.email}
          error={this.state.errors.email}
          handleChange={(event) =>
            this.editUserInformations("email", event.target.value)
          }
        />

        <Input
          name="bio"
          label="Bio"
          icon="fa-id-card"
          type="text"
          value={user.bio}
          handleChange={(event) =>
            this.editUserInformations("bio", event.target.value)
          }
        />

        <Input
          name="birthday"
          label="Birthday"
          icon="fa-cake-candles"
          type="date"
          value={birthday}
          error={this.state.errors.birthday}
          handleChange={(event) => {
            if (!event.target.value) {
              this.editUserInformations("birthday", event.target.value);
              return;
            }

            let birth = moment(event.target.value, "YYYY-MM-DD").toDate();
            birth = dateFormat(birth, "dd/mm/yyyy");
            this.editUserInformations("birthday", birth);
          }}
        />

        <Input
          name="actualPassword"
          label="Your actual password"
          icon="fa-lock"
          type="password"
          hasShowPassword={true}
          error={this.state.errors.password}
          handleChange={(event) =>
            this.setState({
              password: event.target.value,
            })
          }
        />

        <Input
          name="newPassword"
          label="New password"
          icon="fa-key"
          type="password"
          hasShowPassword={true}
          error={this.state.errors.newPassword}
          handleChange={(event) =>
            this.setState({
              newPassword: event.target.value,
            })
          }
        />
      </div>
    );
  }
}

export default EditProfile;
