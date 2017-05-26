import React, { Component } from 'react';
class Result extends Component {
  render() {
    return (
        <div className="result">
      	  <div className="left">
      	    <h2>Product Name</h2>
      	    <a href="http://placehold.it"><img src="http://placehold.it/300x300" alt="Product"/></a>
      	  <div className="issues"></div>
      	</div>
      	<div className="right">
          <h2>Product Description</h2>
        	  <table>
              <thead>
                <tr>
                <th>Ingredient</th>
                <th>Can I use this?</th>
                </tr>
        
              </thead>
            </table>
      	</div>
      </div>
    );
  }
}

export default Result;