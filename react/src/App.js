import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Profile from './components/Profile';
import Result from './components/Result';
import History from './components/History';
import FourOFour from './components/Four_o_Four';
import {
  BrowserRouter as Router,
  Route,
  Switch
  } from 'react-router-dom';

console.log("App.js is working.");

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issues: []
    }
    this.selectedCheckboxes = this.selectedCheckboxes.bind(this)
  }

  selectedCheckboxes(issues) {
    this.state.issues.push({
      issues
    })
    this.setState({ issues: this.state.issues })
    console.log(this.state.issues);
  }

  render() {
    return (
	  <Router>
    <div className="wrapper">
	    <Navigation />
        <Switch>
          <Route path="/" exact component={() => (<Home />) }/>
          <Route path="/profile" exact component={() => (<Profile selectedCheckboxes={this.selectedCheckboxes}/>) }/>
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
