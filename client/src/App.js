import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AuthService from './components/Auth/AuthService';
// import withAuth from './components/Auth/withAuth';
import Home from './Pages/Home'



class App extends Component {

  render() {
    console.log('I was triggered during render')
    return (
     
      <div>
        {this.props.history.location.pathname === "/" ? <Redirect to="/home" /> : null}
      </div>

    );
  }

}


export default App;
