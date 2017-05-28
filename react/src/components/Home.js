import React, { Component } from 'react';
import axios from 'axios';
import WebcamCapture from './WebcamCapture';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
          upc: undefined,
          productBrand: " ",
          productName: undefined,
          ingredientList: [],
          ingredientString: " ",
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.getIngred = this.getIngred.bind(this);
    }

    handleCreate(event) {
      console.log('handleCreate woke')
      event.preventDefault();

      var digit=this.refs.barcode.value.toString().length;
      if(!parseInt(this.refs.barcode.value,10))
        this.refs.barcode.value = "Only numbers"; 
      else if(digit!==12)
      this.refs.barcode.value = "Only 12 digits";  
      else
      this.getIngred(this.refs.barcode.value);

    }

    getIngred(upc) {
        console.log(`getIngred woke: ${upc}`);
        const appId = '30b6d41b';
        const appKey = 'c334fe810b4d85dd339fb8229c2763da';
        
        axios.get(`https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=${appId}&appKey=${appKey}`)
            .then((res) => {
              let productBrand = res.data.brand_name;
              let ingredientListRes = res.data.nf_ingredient_statement;
              let ingredientListArr = ingredientListRes.split(" ");
              console.log(`${ingredientListArr}`)
              this.setState({
                upc: upc,
                productName: res.data.item_name,
                ingredientList: ingredientListArr,
                ingredientString: ingredientListRes,
                productBrand: productBrand,
              })
              // console.log(ingredientListArr);
              this.props.grabData(
                  this.state.productBrand,this.state.upc, this.state.productName, this.state.ingredientList, this.state.ingredientString
                );
            });
  }

  render() {
    return (
      <div className="home">
        <form className="upc-photo-input">
          <label>Take a photo of the barcode from your camera:</label>

          <WebcamCapture />

        </form>
        <form 
          className="upc-text-input"
          onSubmit={this.handleCreate}>
          
          <label>Or enter the 12 digit Universal Product Code (UPC):</label><br/>
          
          <input
            type="text"
            placeholder="Look up by barcode"
            ref="barcode"
            className="barcode"
            />
          <button className="searchProduct">Search</button>
          <ul className="displayResult"><li><NavLink to="/result">View Results!</NavLink></li></ul>
        </form>
      </div>
    );
  }
};

export default Home; 
