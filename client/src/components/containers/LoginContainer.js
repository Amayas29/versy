import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { validateEmail, validatePassword } from "../../utils/Validations";
import Form from "../authentification/Form";
import Input from "../Input";
import SignupContainer from "./SignupContainer";
import axios from "axios";

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
    this.login = this.login.bind(this);
  }

  setValue(name, value) {
    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    this.props.setHasLogo(true);
  }

  login(_e) {
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
      axios
        .post(`http://localhost:4000/api/users/login`, {
          email: email,
          password: password,
        })
        .then((_res) => {
          this.props.setPage(<MainLayout setPage={this.props.setPage} />);
        })
        .catch((err) => {
          this.setState({
            errors: {
              [err.response.data.field]: err.response.data.message,
            },
          });
        });
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
        handleAction={this.login}
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
