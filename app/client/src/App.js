import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Profile from './Profile';
import Result from './Result';
import History from './History';
import FourOFour from './Four_o_Four';
import { BrowserRouter as Router, 
	     Route, Switch } from 'react-router-dom';

console.log("App.js is working.");

class App extends Component {
  render() {
    return (
	  <Router>
    <div className="wrapper">
	    <Navigation />
        <Switch>
          <Route path="/" exact component={() => (<Home />) }/>
          <Route path="/profile" exact component={() => (<Profile />) }/>
          <Route path="/result" exact component={() => (<Result />) }/>
          <Route path="/history" exact component={() => (<History />) }/>
          <Route path="/*" component={() => (<FourOFour />) }/>
        </Switch>
    </div>
    </Router>
    );
  }
}

export default App;
