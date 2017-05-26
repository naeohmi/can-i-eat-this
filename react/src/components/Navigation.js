import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <a href="/"><img src="/images/logo.png" alt="Logo" /></a>
        </div>
    	  <nav>
    	     <ul>
    	       <li><Link to="/">Home</Link></li>
    	       <li><NavLink to="/profile">Profile</NavLink></li>
    	       <li><NavLink to="/history">History</NavLink></li>
          </ul>
    	  </nav>
	    </div>
    );
  }
}

export default Navigation;