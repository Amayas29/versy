import React from "react";
import MainLayout from "../../layouts/MainLayout";

import {
  validateUsername,
  validateDate,
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
} from "../../utils/Validations";

import Form from "../authentification/Form";
import Input from "../Input";
import LoginContainer from "./LoginContainer";
import axios from "axios";

class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      birthday: "",
      email: "",
      password: "",
      passwordconfirmation: "",

      errors: {
        username: "",
        birthday: "",
        email: "",
        password: "",
        passwordconfirmation: "",
      },
    };

    this.setValue = this.setValue.bind(this);
    this.register = this.register.bind(this);
  }

  setValue(name, value) {
    this.setState({
      [name]: value,
    });
  }

  register(_e) {
    const { username, birthday, email, password, passwordconfirmation } =
      this.state;

    const usernameValidation = validateUsername(username);
    const birthdayValidation = validateDate(birthday);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const passwordConfirmationValidation = validatePasswordConfirmation(
      passwordconfirmation,
      password
    );

    this.setState({
      errors: {
        username: usernameValidation.message,
        birthday: birthdayValidation.message,
        email: emailValidation.message,
        password: passwordValidation.message,
        passwordconfirmation: passwordConfirmationValidation.message,
      },
    });

    if (
      emailValidation.status &&
      passwordValidation.status &&
      passwordConfirmationValidation.status &&
      usernameValidation.status &&
      passwordValidation.status
    ) {
      axios
        .post("http://localhost:4000/api/users/register", {
          username: username,
          birthday: birthday,
          email: email,
          password: password,
        })
        .then((res) => {
          // localStorage.setItem("token", res.data.token);
          this.props.setPage(<MainLayout setPage={this.props.setPage} />);
        })
        .catch((err) => {
          console.log("No " + err);
        });
    }
  }

  componentDidMount() {
    this.props.setHasLogo(false);
  }

  render() {
    return (
      <Form
        title="Create Account"
        action="Sign up"
        moveTo={
          <div className="move-to">
            Already have an account?{" "}
            <span
              onClick={() =>
                this.props.setContainer(
                  <LoginContainer
                    setContainer={this.props.setContainer}
                    setPage={this.props.setPage}
                    setHasLogo={this.props.setHasLogo}
                  />
                )
              }
            >
              Login now
            </span>
          </div>
        }
        handleAction={this.register}
      >
        <Input
          label="Username"
          type="text"
          name="username"
          icon="fa-user"
          handleChange={(e) => this.setValue("username", e.target.value)}
          error={this.state.errors.username}
        />

        <Input
          label="Birthdate"
          type="date"
          name="birthday"
          icon="fa-cake-candles"
          handleChange={(e) => this.setValue("birthday", e.target.value)}
          error={this.state.errors.birthday}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          icon="fa-envelope"
          handleChange={(e) => this.setValue("email", e.target.value)}
          error={this.state.errors.email}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          icon="fa-key"
          hasShowPassword={true}
          handleChange={(e) => this.setValue("password", e.target.value)}
          error={this.state.errors.password}
        />

        <Input
          label="Confirm your password"
          name="passwordconfirmation"
          type="password"
          icon="fa-key"
          hasShowPassword={true}
          handleChange={(e) =>
            this.setValue("passwordconfirmation", e.target.value)
          }
          error={this.state.errors.passwordconfirmation}
        />
      </Form>
    );
  }
}

export default SignupContainer;
