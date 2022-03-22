import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { validateEmail, validatePassword } from "../../utils/Validations";
import Form from "../authentification/Form";
import Input from "../authentification/Input";
import SignupContainer from "./SignupContainer";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      errors: {
        email: "",
        password: "",
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

  componentDidMount() {
    this.props.setHasLogo(true);
  }

  handleFormSubmit(e) {
    const { email, password } = this.state;

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    this.setState({
      errors: {
        email: emailValidation.message,
        password: passwordValidation.message,
      },
    });

    if (emailValidation.status && passwordValidation.status) {
      console.log("Login");
      this.props.setPage(<MainLayout setPage={this.props.setPage} />);
    }
  }

  render() {
    return (
      <Form
        title="Connection"
        action="Login"
        moveTo={
          <div className="move-to">
            Don't have an account ?{" "}
            <span
              onClick={() =>
                this.props.setContainer(
                  <SignupContainer
                    setContainer={this.props.setContainer}
                    setPage={this.props.setPage}
                    setHasLogo={this.props.setHasLogo}
                  />
                )
              }
            >
              Sign up
            </span>
          </div>
        }
        handleAction={this.handleFormSubmit}
      >
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
      </Form>
    );
  }
}

export default LoginContainer;
