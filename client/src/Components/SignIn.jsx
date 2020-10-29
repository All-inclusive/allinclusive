import React from "react";
import "../../style/SignIn.css";
import $ from "jquery";
import { Col, Container } from "react-bootstrap";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  login() {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    axios.post("/api/user/login", user).then((result) => {
      console.log(result);
    });
  }

  componentDidMount() {
    $(".login-info-box").fadeOut();
    $(".login-show").addClass("show-log-panel");
  }

  render() {
    $('.login-reg-panel input[type="radio"]').on("change", function () {
      if ($("#log-login-show").is(":checked")) {
        $(".register-info-box").fadeOut();
        $(".login-info-box").fadeIn();

        $(".white-panel").addClass("right-log");
        $(".register-show").addClass("show-log-panel");
        $(".login-show").removeClass("show-log-panel");
      } else if ($("#log-reg-show").is(":checked")) {
        $(".register-info-box").fadeIn();
        $(".login-info-box").fadeOut();

        $(".white-panel").removeClass("right-log");

        $(".login-show").addClass("show-log-panel");
        $(".register-show").removeClass("show-log-panel");
      }
    });

    return (
      <div>
        <Col style={{ marginTop: "400px" }}>
          <div class="login-reg-panel">
            <div class="login-info-box">
              <h2>Have an account?</h2>
              <p>Lorem ipsum dolor sit amet</p>
              <label id="label-register" for="log-reg-show">
                Login
              </label>
              <input
                type="radio"
                name="active-log-panel"
                id="log-reg-show"
                checked="checked"
              />
            </div>

            <div class="register-info-box">
              <h2>Don't have an account?</h2>
              <p>Lorem ipsum dolor sit amet</p>
              <label
                id="label-login"
                for="log-login-show"
                onClick={this.props.RegisterClick}
              >
                Register
              </label>
              <input type="radio" name="active-log-panel" id="log-login-show" />
            </div>

            <div class="white-panel">
              <div class="login-show">
                <h2>LOGIN</h2>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <input type="button" value="Login" onClick={this.login} />
                <a href="">Forgot password?</a>
              </div>

              <div class="register-show">
                <h2>REGISTER</h2>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="button" value="Register" />
              </div>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}
export default SignIn;
