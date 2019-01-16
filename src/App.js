import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

class App extends Component {
  state = {
    sessionToken: undefined
  }

  constructor(){
    super();
    this.state = {};
  }

  removeSessionToken = () => {
    this.setState({sessionToken: undefined})
  }

  storeSessionToken = (input) => {
    this.setState({sessionToken: input})
  }

  viewConductor(){
    return (this.state.sessionToken !== undefined) ? <Pies/> : <Auth tokenHandler={this.storeSessionToken}/>
  }

  render() {
    return (
      <div className="App">
        <Navbar logout={this.removeSessionToken}/>
        {this.viewConductor()}
      </div>
    );
  }
}

export default App;
