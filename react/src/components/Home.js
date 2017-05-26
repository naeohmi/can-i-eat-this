import React, { Component } from 'react';
import axios from 'axios';
// import Webcam from 'react-webcam';
import WebcamCapture from './WebcamCapture';

class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
          upc: undefined,
          productName: undefined,
          ingredientList: [],
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
        const appId = '51857eb3';
        const appKey = 'be5d49bb734cca8a5980f4f8776ea657';
        
        axios.get(`https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=${appId}&appKey=${appKey}`)
            .then((res) => {
              let ingredientListRes = res.data.nf_ingredient_statement;
              let ingredientListArr = ingredientListRes.split(" ");

              this.setState({
                upc: upc,
                productName: res.data.item_name,
                ingredientList: ingredientListArr,
              })

              console.log(ingredientListArr);

              this.props.grabData(this.state.upc, this.state.productName, this.state.ingredientList);

              // window.location.reload();
              });
              
              // .catch((err) => {
              //   console.log(`err: ${err}`);
              // });
    };



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
      </div>
    );
  }
};

export default Home;