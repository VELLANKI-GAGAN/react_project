import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <h2>SmarterP Signup</h2>
        <div className="signup-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
