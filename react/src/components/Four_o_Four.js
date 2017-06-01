import React, { Component } from 'react';

class FourOFour extends Component {
  render() {
    return (
    	<div className="errorMessage">
    	<img className="image404" src="images/404.jpg" alt="Error 404"/>
    	<h1>Sorry</h1>
    	<h4>This barcode does not exist, ,make sure that the number is correct</h4>
    	<h4>Or API key is expired come back tomorrow</h4>
    	</div>
    );
  }
}

export default FourOFour;
