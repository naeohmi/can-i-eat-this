import React, { Component } from 'react';

class Result extends Component {

   constructor(props) {
    console.log(props)
    super(props)
  this.state = {
      upc: undefined,
      productName: undefined,
      ingredientList: [],
      issues: [null, null, null, null, null, null, null, null, null]
    }
     this.grabData = this.grabData.bind(this);
  }

grabData() {
      this.setState({
        upc: this.props.upc,
        productName: this.props.productName,
        ingredientList: this.props.ingredientList,
      }, function() {
        console.log(this.props.upc);
        console.log(this.props.productName);
        console.log(this.props.ingredientList);
        });
    }



  componentDidMount(){
    this.grabData();
  }
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