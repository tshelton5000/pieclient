import React, {Component} from 'react';

import './Auth.css';

class Auth extends Component {
  //the values of our class are below, in state
  state = {
    login: true,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const url = this.state.login ? 'http://localhost:3000/auth/signin' : 'http://localhost:3000/auth/signup'

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => this.props.tokenHandler(data.sessionToken))
  }

  //this method updates state based upon user input
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value}, () => console.log(this.state))
  }

  //prevents page refresh, clears input fields, toggles the login
  logginToggle = (event) => {
    event.preventDefault();
    const login = this.state.login;
    this.setState({
      login: !login,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  render(){
    //showing login or signup based upon our this.state.login boolean
    let title = this.state.login ? "Login" : "Signup";
    //if this.state.login is true, show nothing extra, else show first and last names
    let signupFields = this.state.login
      ? null
      : (
        <div>
          <label htmlFor="firstName">First Name:</label><br/>
          <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName}/><br/>
          <label htmlFor="lastName">Last Name:</label><br/>
          <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName}/><br/>
        </div>
      )

    return(
      <form className="cardLike" onSubmit={this.handleSubmit}>
        <h1>{title}</h1>
        <label htmlFor="email">Email:</label><br/>
        <input type="text" id="email" onChange={this.handleChange} value={this.state.email}/><br/>
        <label htmlFor="password">Password:</label><br/>
        <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/><br/>
        {signupFields}
        <button onClick={this.logginToggle}>Login/Signup Toggle</button><br/>
        <button type="submit">Submit User Data</button>
      </form>
    )
  }
}

export default Auth;