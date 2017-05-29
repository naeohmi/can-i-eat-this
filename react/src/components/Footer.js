import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Footer extends Component {
  render() {
        
   const images=[
       "/images/icons/egg-color.png",
       "/images/icons/fish-color.png",
       "/images/icons/milk-color.png",
       "/images/icons/icons-blackandwhite/peanut-bw.png",
       "/images/icons/sesame-color.png",
       "/images/icons/shellfish-color.png",
       "/images/icons/soy-color.png",
       "/images/icons/treenut-color.png",
       "/images/icons/wheat-color.png",
       ];
    return (
      <div className="footer">
        <div className="logo">
          <a href="/"><img src="/images/logo.png" alt="Logo" /></a>
        </div>
    	  <nav>
    	     <ul>
                <span className="icons"><img src={images[0]} alt="allergen-icon" /></span>
                <span className="icons"><img src={images[1]} alt="allergen-icon" /></span>
    	       <li className="navLi"><Link to="/">Home</Link></li>
                <span className="icons"><img src={images[2]} alt="allergen-icon" /></span>
                <span className="icons"><img src={images[4]} alt="allergen-icon" /></span>
    	       <li className="navLi"><NavLink to="/profile">Profile</NavLink></li>
                <span className="icons"><img src={images[5]} alt="allergen-icon" /></span>
                <span className="icons"><img src={images[6]} alt="allergen-icon" /></span>
    	       <li className="navLi"><NavLink to="/history">History</NavLink></li>
                <span className="icons"><img src={images[7]} alt="allergen-icon" /></span>
                <span className="icons"><img src={images[8]} alt="allergen-icon" /></span>
          </ul>
    	  </nav>
	    </div>
    );
  }
}

export default Footer;