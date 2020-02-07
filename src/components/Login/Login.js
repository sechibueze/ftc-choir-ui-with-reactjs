import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

import './LoginStyle.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to contact page when they login
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

//   componentDidMount() {
//     // If logged in and user navigates to Login page, should redirect them to dashboard
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push("/dashboard");
//     }
//   }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-12 col-sm-offset-2 col-md-offset-3 card">
            <div className="row">
              <div className="col-md-12">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR7Nzcy54zeh5xoeGjU5vUIvsvdcmbnXvarGoG5uSKNcNwbBKE"
                  alt="ft-logo"
                  className="mx-auto d-block img-fluid"
                />
                <h3 className="text-center text-black-50">
                  Faith Tabernacle Choir
                </h3>
                <p className="text-center">
                  Log in with your Choir credentials
                </p>
              </div>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <hr className="colorgraph" />
              <div class="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div class="form-group">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="Email Address"
                      type="email"
                      placeholder="Enter your Email address"
                      className={classnames("form-control", {
                        invalid: errors.email
                      })}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      className={classnames("form-control", {
                        invalid: errors.password
                      })}
                    />
                  </div>
                </div>
              </div>
              <hr clasName="colorgraph" />
              <div className="row">
                <div className="col-xs-12 col-md-6">
                </div>
                <div className="col-xs-12 col-md-6">
                  <a href="#" class="btn btn-success btn-block btn-lg">
                    Sign In
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default Login
