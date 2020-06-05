import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { userActions } from "../../../../store/actions/";
// import { updateLoginUsr } from "../../../../store/actions/userActions";
// import * as userActions from "../../../../store/actions/userActions";
import { userActions } from "../../../../store/actions/index";

class SignInForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(userActions);
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.proceedLogin(data);
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField_Label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="FormField_Input"
              placeholder="Enter your username"
              name="username"
              value={this.props.username}
              onChange={(username) => this.props.updateLoginUsr(username)}
            />
          </div>

          <div className="FormField">
            <label className="FormField_Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField_Input"
              placeholder="Enter your password"
              name="password"
              value={this.props.password}
              onChange={(password) => this.props.updateLoginPassword(password)}
            />
          </div>

          <div className="FormField">
            <button className="FormField_Button mr-20">Sign In</button>{" "}
            <Link to="/" className="FormField_Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.plan[0].home);
  return {
    username: state.user.loginInfo.username,
    password: state.user.loginInfo.password,
  };
};

const mapDispatchToProps = () => {
  return {
    updateLoginUsr: userActions.updateLoginUsr,
    // updateLoginPassword: userActions.updateLoginPassword,
    // proceedLogin: userActions.proceedLogin,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps())(SignInForm)
);