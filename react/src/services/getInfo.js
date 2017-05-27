import React, { Component } from 'react';
import axios from 'axios';

class GetInfo extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            state: state,
        }
        this.getIngred = this.getIngred.bind(this);
    }

    getIngred(upc) {
        console.log('getinfo woke up');
        const appId = '51857eb3';
        const appKey = 'be5d49bb734cca8a5980f4f8776ea657';
        return axios.get(`https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=${appId}&appKey=${appKey}`)
            .then((res) => {
                var productName = res.data.item_name;
                var ingredientList = res.data.nf_ingredient_statement;
                // console.log(`name: ${productName}`);
                // console.log(`list: ${ingredientList}`);

                let listArr = ingredientList.split(" ");
                
                var info = {
                    "userid": 123456,
                    "upc": `${upc}`,
                    "productname": `${productName}`,
                    "ingredientlist": [`${listArr}`],
                    // "issues": [false, false, false, false, false, false, false, false, false],
                };
                // console.log(info)
            })
            .catch((err) => {
                console.log(`err: ${err}`);
            });
    }

  render() {
    return (
      <div className="get-info">
		<h2>{this.getIngred()}</h2>
      </div>
    );
  }
}

export default GetInfo;