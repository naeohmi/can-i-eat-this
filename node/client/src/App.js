import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import History from './History';
import Four_o_Four from './Four_o_Four';
import { BrowserRouter as Router, 
	     Route, Switch, Link, 
	     NavLink, match } from 'react-router-dom';

let Navigation = () => {
	return (
	<nav>
	  <ul>
         <li><Link to="/">Home</Link></li>
         <li><NavLink to="/profile">Profile</NavLink></li>
         <li><NavLink to="/history">History</NavLink></li>
	  </ul>
	</nav>
	)
}

class App extends Component {
  render() {
    return (
	  <Router>
	   <div id="wrapper">
	   <Navigation />
        <Switch>
          <Route path="/" exact component={() => (<Home />) }/>
          <Route path="/profile" exact component={() => (<Profile />) }/>
          <Route path="/history" exact component={() => (<History />) }/>
          <Route component={() => (<Four_o_Four />) }/>
        </Switch>
       </div>
      </Router>
    );
  }
}

export default App;
