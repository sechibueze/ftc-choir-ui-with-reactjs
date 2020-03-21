import React, { Component } from 'react';

class ResetPassword extends Component {
  state = {
    token: '',
    email: '',
    password: '',
    message: ''
  }

  componentDidMount() {
    const { token, email } = this.props.match.params;
    this.setState({
      token, email
    })
  }
  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value
    })
  }

  handlePasswordReset = e => {
    e.preventDefault();
    console.log('new state', this.state)

    console.log('new props', this.props)
    const { token, email, password } = this.state;
    //passwordResetToken = from query => token
    fetch('http://localhost:8000/api/v1/auth/resetpassword',
      {
        method: 'POST',
        body: JSON.stringify({ email, password, passwordResetToken: token }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(r => r.json())
      .then(data => {
        if (data.status) {
          this.setState({ message: data.message })
        } else {
          this.setState({ message: data.message })
        }
      })
      .catch(e => {
        this.setState({ message: "Server error: Problem reseting your password" })
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handlePasswordReset}>
          {this.state.message}
          <input type="password" id="password" onChange={this.handleChange} name="reset-password" />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;