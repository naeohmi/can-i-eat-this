import React, { Component } from 'react';
import axios from 'axios';
// import Webcam from 'react-webcam';
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
      this.getIngred(this.refs.barcode.value);
      this.refs.barcode.value = "";
    }

    getIngred(upc) {
        console.log(`getIngred woke: ${upc}`);
        const appId = '96f2d669';
        const appKey = '2562fcee62c25db749bd19f566a76be3';
        
        axios.get(`https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=${appId}&appKey=${appKey}`)
            .then((res) => {
              let productBrand = res.data.brand_name;
              let ingredientListRes = res.data.nf_ingredient_statement;
              let ingredientListArr = ingredientListRes.split(" ");

              this.setState({
                upc: upc,
                productName: res.data.item_name,
                ingredientList: ingredientListArr,
                ingredientString: ingredientListRes,
                productBrand:productBrand,
              })
              // console.log(ingredientListArr);
              this.props.grabData(this.state.upc, this.state.productName, this.state.ingredientList);
              // window.location.reload();
              });
              // .catch((err) => {
              //   console.log(`err: ${err}`);
              // });
    }

    // ocr() {
    //   console.log('ocr has awoken!');
    //   const apiKey = "cfb3a32bd888957";
    //   const photoUrl = "http://i.imgur.com/wgXuL7s.jpg"; //hard code for now. this will be the screenshot data URL from WebcamCapture

    //   axios.get(`https://api.ocr.space/parse/imageurl?apikey=${apiKey}&url=${photoUrl}`)
    //     .then((res) => {
    //       let upcFromPhoto = res.data.ParsedResults.ParsedText;
    //       console.log(`yay from pic: ${upcFromPhoto}`);
    //     })

    // }



    render() {
      return (
        <div className="home">
          <form className="upc-photo-input">
            <label>Take a photo of the barcode from your camera:</label>
            <WebcamCapture />
          </form>
          <form 
            className="upc-text-input"
            onSubmit={this.handleCreate}
          >
            <label>Or enter the 12 digit Universal Product Code (UPC):</label><br/>
            <input
              type="text"
              placeholder="Look up by barcode"
              ref="barcode"
              className="barcode"
            />
            <button className="searchProduct" >Search</button>
          </form>
          <ul className="displayResult"><li><NavLink to="/result">View Results!</NavLink></li></ul>
        </div>
      );
   };
};

export default Home;