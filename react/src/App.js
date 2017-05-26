import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
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
    this.setState({ issues: issues })
    this.addAllergies();
    // console.log(this.state.issues);
  }

  addAllergies(){
    axios.post('https://caneatthis.herokuapp.com/api/allergies/', {
      userid: 12345,
      eggsallergy: this.state.issues[0],
      fishallergy: false,
      milkallergy: false,
      peanutsallergy: false,
      sesameallergy: false,
      shellfishallergy: false,
      soyallergy: true,
      treenutsallergy: false,
      wheatallergy: false
      })
    .then((res) => {
      console.log(res);
      })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
	  <Router>
    <div className="wrapper">
	    <Navigation />
        <Switch>
          <Route path="/" exact component={() => (<Home />) }/>
          <Route path="/profile" exact component={() => (<Profile selectedCheckboxes={this.selectedCheckboxes} 
                                                                  issues={this.state.issues}/>) }/>
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