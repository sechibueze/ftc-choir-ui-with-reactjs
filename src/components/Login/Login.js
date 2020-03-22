import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';
import classnames from 'classnames';
import ftc_logo from '../../images/ftc-logo.png';
import './LoginStyle.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to contact page when they login
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    console.log('Login::componentDidiMount props', this.props)
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
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
                  src={ftc_logo}
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
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>

                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames('form-control', {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />
                    <span className="text-danger">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>

                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames('form-control', {
                        invalid:
                          errors.password || errors.passwordincorrect,
                      })}
                    />
                    <span className="text-danger">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>
                </div>
              </div>
              <hr className="colorgraph" />
              <div className="row">
                <div className="col-xs-12 col-md-6">
                </div>
                <div className="col-xs-12 col-md-6">
                  <input
                    type="submit"
                    className="btn btn-success btn-lg d-block"
                    value="Login"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-12">
                  <Link to="/forgotpassword"> Forgot password</Link>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({
  auth: state.auth
  // errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(Login);
