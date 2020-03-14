import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
import classnames from 'classnames';
import "./Signup.css";
import ftc_logo from '../../images/ftc-logo.png';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-12 col-sm-offset-2 col-md-offset-3 card">
            <div className="row">
              <div className="col-md-12">
                <img src={ftc_logo} alt="ft-logo" className="mx-auto d-block img-fluid" />
                <h3 className="text-center text-black-50">Faith Tabernacle Choir</h3>
                <p className="text-center">Fill the following information to register into the directory</p>
              </div>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <hr className="colorgraph" />
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"/></span>
                      </div>
                    <input
                      onChange={this.onChange}
                      value={this.state.firstname}
                      error={errors.firstname}
                      id="firstname"
                      type="text"
                      placeholder="First Name"
                      className={classnames("form-control", {
                        invalid: errors.firstname,
                      })}
                    />
                    <span className="text-danger">{errors.firstname}</span>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-user"/> </span>
                      </div>
                    <input
                      onChange={this.onChange}
                      value={this.state.lastname}
                      error={errors.lastname}
                      id="lastname"
                      type="text"
                      placeholder="Last Name"
                      className={classnames("form-control", {
                        invalid: errors.lastname,
                      })}
                    />
                    <span className="text-danger">{errors.lastname}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fa fa-inbox"/> </span>
                    </div>
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className={classnames("form-control", {
                      invalid: errors.email,
                    })}
                  />
                  <span className="text-danger">{errors.email}</span>
                  </div>
                </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fa fa-phone"/> </span>
                    </div>
                  <input
                    onChange={this.onChange}
                    value={this.state.phone}
                    error={errors.phone}
                    id="phone"
                    type="tel"
                    placeholder="Mobile Number"
                    className={classnames("form-control", {
                      invalid: errors.phone,
                    })}
                  />
                  <span className="text-danger">{errors.phone}</span>
                  </div>
                </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-user-secret"/> </span>
                      </div>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      placeholder="Password"
                      className={classnames("form-control", {
                        invalid: errors.password,
                      })}
                    />
                    <span className="text-danger">{errors.password}</span>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-user-secret"/> </span>
                      </div>

                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      placeholder="Confirm password"
                      className={classnames("form-control", {
                        invalid: errors.password2,
                      })}
                    />
                    <span className="text-danger">{errors.password2}</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="colorgraph" />
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                  >
                    Register
                  </button>
                </div>
                <div className="col-xs-12 col-md-6">
                  <Link to="/login" className="btn btn-success btn-block btn-lg">
                    Sign In
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className="modal fade"
          id="t_and_c_m"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  Terms & Conditions
                </h4>
              </div>
              <div className="modal-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, itaque, modi, aliquam nostrum at sapiente
                  consequuntur natus odio reiciendis perferendis rem nisi
                  tempore possimus ipsa porro delectus quidem dolorem ad.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, itaque, modi, aliquam nostrum at sapiente
                  consequuntur natus odio reiciendis perferendis rem nisi
                  tempore possimus ipsa porro delectus quidem dolorem ad.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, itaque, modi, aliquam nostrum at sapiente
                  consequuntur natus odio reiciendis perferendis rem nisi
                  tempore possimus ipsa porro delectus quidem dolorem ad.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, itaque, modi, aliquam nostrum at sapiente
                  consequuntur natus odio reiciendis perferendis rem nisi
                  tempore possimus ipsa porro delectus quidem dolorem ad.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, itaque, modi, aliquam nostrum at sapiente
                  consequuntur natus odio reiciendis perferendis rem nisi
                  tempore possimus ipsa porro delectus quidem dolorem ad.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, itaque, modi, aliquam nostrum at sapiente
                  consequuntur natus odio reiciendis perferendis rem nisi
                  tempore possimus ipsa porro delectus quidem dolorem ad.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, itaque, modi, aliquam nostrum at sapiente
                  consequuntur natus odio reiciendis perferendis rem nisi
                  tempore possimus ipsa porro delectus quidem dolorem ad.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  I Agree
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
    mapStateToProps,
    { registerUser },
)(withRouter(Signup));
