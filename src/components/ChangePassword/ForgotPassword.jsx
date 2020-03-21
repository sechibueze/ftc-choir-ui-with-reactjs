import React, { Component } from 'react';

class ForgotPassword extends Component {
  state = {
    email: '',
    message: ''
  }
  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value
    })
  }

  handleEmail = e => {
    e.preventDefault();
    console.log('Email to reset link', this.state)
    const { email } = this.state;
    console.log('emtered mail', JSON.stringify({ email: email }))
    fetch('http://localhost:8000/api/v1/auth/forgotpassword',
      {
        method: 'POST',
        body: JSON.stringify({ email: email }),
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
    // const user = this.state;
    // this.props.sendPasswordResetToken(user)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleEmail}>
          {this.state.message}
          <input type="email" id="email" onChange={this.handleChange} name="email-password" />
          <button type="submit">Send Password Reset Link </button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;