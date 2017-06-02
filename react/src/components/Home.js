import React, { Component } from 'react';
import axios from 'axios';
import WebcamCapture from './WebcamCapture';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'

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


        const appId = '30b6d41b'; //key three 
        const appKey = '2fe329b2293614b36c07b2e5696f0ac6'; //app three

        

        // const appId = 'bf4d4714'; //key one
        // const appKey = '09b92398885352afcdd13377eacd7e5c'; //app one

        //const appId = 'faf14366'; //key two 
        //const appKey = '8453458e60c6b7142453df695e20f6d5'; //app two


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
          <div className="introHome">
            <h1 className="title">Can I Eat This?</h1>
            <h2>An app for people who care about the ingredients in their food!</h2>
             <p className="introParagraph"> 
              <br />
              <b>Step 1: </b> Users register their dietary restrictions on the user preferences page and can save issues. Such as allergic to peanuts, lactose intolerant, gluten-free, allergic to shellfish, or other specific dietary restrictions.
              <br />
              <br />
              <b>Step 2: </b> Users quickly and easily take a picture of the barcode of a food item to check the ingredients. Using Optical Character Recognition (OCR) the app checks if any of the ingredients from the product match with any of the saved user preferences.
              <br />
              <br />
              <b>Step 3: </b> The app displays the results of the thorough ingredient check (over 60 keywords for each) and indicates whether the user can eat the item or not. Rendering each of the unique allergen issues and whether they are present in the product or not.
              <br />
              <br />
              <b>Step 4: </b> In history, the user can save their past products searched and preferences, stored in an external database.
            </p>
          </div>
        <div className="inputOptions">
          <form className="upc-photo-input">
            <label className="labelMessage1">Take a photo of the barcode from your camera:</label>
            <WebcamCapture />
          </form>
          <form 
            className="upc-text-input"
            onSubmit={this.handleCreate}>
            
            <label className="labelMessage2">Or enter the 12 digit Universal Product Code (UPC):</label><br/>
            <input
              type="text"
              placeholder="Look up by barcode"
              ref="barcode"
              className="barcode"
              />
            <button className="searchProduct">Search</button>

              <div className="displayR">
              <ul className="displayResult"><li><NavLink to="/result">Click to view results!</NavLink></li></ul>
              </div>
          </form>

        </div>
    <Footer />
    </div>
    );
  }
};

export default Home; 
