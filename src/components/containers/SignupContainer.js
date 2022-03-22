import React from "react";
import MainLayout from "../../layouts/MainLayout";
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
  validateName,
  validateUsername,
} from "../../utils/Validations";
import Form from "../authentification/Form";
import Input from "../authentification/Input";
import LoginContainer from "./LoginContainer";

class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      passwordconfirmation: "",

      errors: {
        name: "",
        username: "",
        email: "",
        password: "",
        passwordconfirmation: "",
      },
    };

    this.setValue = this.setValue.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  setValue(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    const {
      name,
      username,
      email,
      password,
      passwordconfirmation,
    } = this.state;

    const nameValidation = validateName(name);
    const usernameValidation = validateUsername(username);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const passwordConfirmationValidation = validatePasswordConfirmation(
      passwordconfirmation,
      password
    );

    this.setState({
      errors: {
        name: nameValidation.message,
        username: usernameValidation.message,
        email: emailValidation.message,
        password: passwordValidation.message,
        passwordconfirmation: passwordConfirmationValidation.message,
      },
    });

    if (
      emailValidation.status &&
      passwordValidation.status &&
      passwordConfirmationValidation.status &&
      nameValidation.status &&
      usernameValidation.status
    )
      this.props.setPage(<MainLayout setPage={this.props.setPage} />);
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
        handleAction={this.handleFormSubmit}
      >
        <Input
          label="Name"
          type="text"
          name="name"
          icon="fa-signature"
          handleChange={(e) => this.setValue("name", e.target.value)}
          error={this.state.errors.name}
        />

        <Input
          label="Username"
          type="text"
          name="username"
          icon="fa-user"
          handleChange={(e) => this.setValue("username", e.target.value)}
          error={this.state.errors.username}
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
