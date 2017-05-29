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

        // const appId = 'bf4d4714'; //key one
        // const appKey = '09b92398885352afcdd13377eacd7e5c'; //app one

        // const appId = 'faf14366'; //key two 
        // const appKey = '8453458e60c6b7142453df695e20f6d5'; //app two

        const appId = 'bf4d4714'; //key three 
        const appKey = '09b92398885352afcdd13377eacd7e5c'; //app three

        
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
            <p className="introParagraph">Lorem ipsum dolor sit amet, his causae melius 
            nostrud id. Dolorum facilisi ei sit. At movet malorum nominati vim. An vix recusabo comprehensam, 
            agam legimus has ei, ea tation neglegentur vim.
            <br/><br/>
            Eam omnium lucilius ea, nec id graecis splendide appellantur, quo cotidieque 
            disputando eu. At probatus explicari forensibus mel, ad per homero scriptorem efficiantur, ei duo iisque 
            abhorreant. At summo forensibus eam, sint verear minimum nam an. An nam omittam electram, 
            an his recteque cotidieque, cu vim incorrupte scriptorem.</p>
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
              <ul className="displayResult"><li><NavLink to="/result">View Results!</NavLink></li></ul>
              </div>
          </form>

        </div>
    <Footer />
    </div>
    );
  }
};

export default Home; 
