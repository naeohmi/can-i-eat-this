import React, { Component } from 'react';
import { Link, NavLink, match } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
	<nav>
	  <ul>
	     <li><Link to="/">Home</Link></li>
	     <li><NavLink to="/profile">Profile</NavLink></li>
	     <li><NavLink to="/history">History</NavLink></li>
      </ul>
	</nav>
    );
  }
}

export default Navigation;