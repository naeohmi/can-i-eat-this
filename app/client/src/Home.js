import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
		    <form>
      	  <label>Take a photo of the barcode from your camera:</label>
      	</form>
		    <form>
	        <label>Or enter the 12 digit of the Universal Product Code (UPC):</label><br/>
          <input type="text" placeholder="Look up by barcode." ref="barcode" className="barcode" />
          <button className="searchProduct">Search</button>
        </form>
      </div>
    );
  }
}

export default Home;