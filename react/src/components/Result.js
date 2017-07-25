import React, { Component } from 'react';
import axios from 'axios';
import UserResult from './UserResult';
import $ from 'jquery'; 
import FourOFour from './Four_o_Four';
class Result extends Component {

  constructor(props) {
    //console.log(props)
    super(props);
    this.state = {
      upc: " ",
      image: "http://placehold.it/300x300",
      productName: undefined,
      ingredientList: [],
      ingredientString: undefined,
      userid: 123456,
      issues: {},
      finding: [" "],
      productBrand: " ",
      eggs: undefined,
      fish: undefined,
      milk: undefined,
      peanuts: undefined,
      sesame: undefined,
      shellfish: undefined,
      soy: undefined,
      treenuts: undefined,
      wheat: undefined,
      result: undefined,
    }
    this.userPref = this.userPref.bind(this);
    this.grabData = this.grabData.bind(this);
    this.filter = this.filter.bind(this);
    this.search = this.search.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.grabProductImage = this.grabProductImage.bind(this);
  }

  grabData() {
    this.setState({
      ingredientList: this.props.ingredientList,
      ingredientString: this.props.ingredientString,
      productBrand: this.props.productBrand,
      upc: this.props.upc,
      productName: this.props.productName,
    }
      //   ,function() {
      //     this.grabProductImage();
      // }
    );
    var finding = this.filter();
    this.setState({ finding: finding });
  }

  //Make an axios call to grab image
  //external API call to get image for each product logged
  grabProductImage() {
    var image;
    $.ajax({url: "https://api.walmartlabs.com/v1/search?apiKey=nreuk5qdfbhbmwheh4emmhf7&query="+this.props.upc,
     jsonp: "callback",
      dataType: "jsonp",
       success: function(response) {
        if(response.totalResults>0){
        console.log(response.items["0"].largeImage);
        image = response.items["0"].largeImage;
        this.setState({ image: image },function() {this.addProduct()
        });
      }
      else
      console.log("empty");
      this.addProduct()
         
//merge conflict here with branch esraa and branch naeohmi - need to resolve

//       .then((res) => {
//         if (res.data.product.image_url) {
//           var image = res.data.product.image_url;
//           console.log(image);
//           this.setState({ image: image }
//             ,function() {
//               this.addProduct()
//             }
//           );
//           console.log(this.state.image);
//         } else {
//           console.log("empty");
//         }
//       }).catch((error) => {
//         console.log(error);
//       });
//   }
  }.bind(this)})
      // .then((res) => {.items["0"].affiliateAddToCartUrl
      //   // if (res.data.product.image_url) {
      //   //   var image = res.data.product.image_url;
      //     console.log(image);
      //   //   this.setState({ image: image }
        //     // ,function() {this.addProduct()
        //     //   }
        //   );
        //   console.log(this.state.image);
        // } else {
        //   console.log("empty");
        // }
      }

  //checks the user issues logged from database and saves them in state
  userPref() {
    let targetURL = `https://can-i-eat-this-api.herokuapp.com/api/allergies/${this.state.userid}`;
    axios.get(targetURL)
      .then((res) => {
        var issues = res.data.data;
        this.setState({ issues })
        console.log(this.state.issues)
      }).then(() => {
        this.grabData()
      })
      .then(() => {
        this.grabProductImage();
        //this.addProduct()
      })

  }
  //adds the product info from state to the database
  addProduct() {
    console.log(this.state.userid + this.props.productName + this.props.upc + this.state.eggs + this.state.fish + this.state.milk + this.state.peanuts + this.state.sesame + this.state.shellfish + this.state.soy + this.state.treenuts + this.state.wheat + this.state.image + this.state.result )
    axios.post('https://can-i-eat-this-api.herokuapp.com/api/information/', {
      userid: this.state.userid,
      product: this.props.productName,
      barcode: this.props.upc,
      eggs: this.state.eggs,
      fish: this.state.fish,
      milk: this.state.milk,
      peanuts: this.state.peanuts,
      sesame: this.state.sesame,
      shellfish: this.state.shellfish,
      soy: this.state.soy,
      treenuts: this.state.treenuts,
      wheat: this.state.wheat,
      img: this.state.image,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //searches through the ingredient list returned from API of UPC
  search(query) {
    return this.state.ingredientList.filter(function (el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }
  //checks whether ingredients have any problem items for each issues
  filter() {
    var eggs = false;
    var fish = false;
    var milk = false;
    var peanuts = false;
    var sesame = false;
    var shellfish = false;
    var soy = false;
    var treenuts = false;
    var wheat = false;
    var result = false;
    var finding = [];
    console.log("I'm filtering");
    //filters through each items in the list
    if (this.search('egg').length !== 0) {
      eggs = true;
    }
    if (this.search('Mayonnaise').length !== 0) {
      eggs = true;
    }
    if (this.search('Catfish').length !== 0) {
      fish = true;
    }
    if (this.search('fish').length !== 0) {
      fish = true;
    }
    if (this.search('Bass').length !== 0) {
      fish = true;
    }
    if (this.search('Cod').length !== 0) {
      fish = true;
    }
    if (this.search('Anchovies').length !== 0) {
      fish = true;
    }
    if (this.search('Flounder').length !== 0) {
      fish = true;
    }
    if (this.search('Grouper').length !== 0) {
      fish = true;
    }
    if (this.search('Haddock').length !== 0) {
      fish = true;
    }
    if (this.search('Hake').length !== 0) {
      fish = true;
    }
    if (this.search('Halibut').length !== 0) {
      fish = true;
    }
    if (this.search('Herring').length !== 0) {
      fish = true;
    }
    if (this.search('Mahi').length !== 0) {
      fish = true;
    }
    if (this.search('Perch').length !== 0) {
      fish = true;
    }
    if (this.search('Pike').length !== 0) {
      fish = true;
    }
    if (this.search('Pollock').length !== 0) {
      fish = true;
    }
    if (this.search('Salmon').length !== 0) {
      fish = true;
    }
    if (this.search('Swordfish').length !== 0) {
      fish = true;
    }
    if (this.search('Sole').length !== 0) {
      fish = true;
    }
    if (this.search('Snapper').length !== 0) {
      fish = true;
    }
    if (this.search('Tilapia').length !== 0) {
      fish = true;
    }
    if (this.search('Trout').length !== 0) {
      fish = true;
    }
    if (this.search('Tuna').length !== 0) {
      fish = true;
    }
    if (this.search('milk').length !== 0) {
      milk = true;
    }
    if (this.search('Butter').length !== 0) {
      milk = true;
    }
    if (this.search('Cheese').length !== 0) {
      milk = true;
    }
    if (this.search('Cream').length !== 0) {
      milk = true;
    }
    if (this.search('Ghee').length !== 0) {
      milk = true;
    }
    if (this.search('Yogurt').length !== 0) {
      milk = true;
    }
    if (this.search('peanut').length !== 0) {
      peanuts = true;
    }
    if (this.search('nut').length !== 0) {
      peanuts = true;
    }
    if (this.search('sesame').length !== 0) {
      sesame = true;
    }
    if (this.search('Tahini').length !== 0) {
      sesame = true;
    }
    if (this.search('soy').length !== 0) {
      soy = true;
    }
    if (this.search('miso').length !== 0) {
      soy = true;
    }
    if (this.search('Edamame').length !== 0) {
      soy = true;
    }
    if (this.search('Tofu').length !== 0) {
      soy = true;
    }

    if (this.search('almond').length !== 0) {
      treenuts = true;
    }
    if (this.search('Cashew').length !== 0) {
      treenuts = true;
    }
    if (this.search('Chestnut').length !== 0) {
      treenuts = true;
    }
    if (this.search('Hazelnut').length !== 0) {
      treenuts = true;
    }
    if (this.search('Macadamia').length !== 0) {
      treenuts = true;
    }
    if (this.search('Pecan').length !== 0) {
      treenuts = true;
    }
    if (this.search('Pine').length !== 0) {
      treenuts = true;
    }
    if (this.search('Pistachio').length !== 0) {
      treenuts = true;
    }
    if (this.search('Walnut').length !== 0) {
      treenuts = true;
    }
    if (this.search('wheat').length !== 0) {
      wheat = true;
    }
    if (this.search('Bread').length !== 0) {
      wheat = true;
    }
    if (this.search('Bulgur').length !== 0) {
      wheat = true;
    }
    if (this.search('Couscous').length !== 0) {
      wheat = true;
    }
    if (this.search('Barnacle').length !== 0) {
      shellfish = true;
    }
    if (this.search('Crab').length !== 0) {
      shellfish = true;
    }
    if (this.search('Crawfish').length !== 0) {
      shellfish = true;
    }
    if (this.search('Krill').length !== 0) {
      shellfish = true;
    }
    if (this.search('Lobster').length !== 0) {
      shellfish = true;
    }
    if (this.search('Prawns').length !== 0) {
      shellfish = true;
    }
    if (this.search('Shrimp').length !== 0) {
      shellfish = true;
    }
    if (this.state.issues["eggsallergy"] === true && eggs === true) {
      console.log("egg")
      result = true;
    }
    if (this.state.issues["fishallergy"] === true && fish === true) {
      console.log("fish")
      result = true;
    }
    if (this.state.issues["milkallergy"] === true && milk === true) {
      console.log("milk")
      result = true;
    }
    if (this.state.issues["peanutsallergy"] === true && peanuts === true) {
      console.log("peanuts")
      result = true;
    }
    if (this.state.issues["sesamesallergy"] === true && sesame === true) {
      console.log("sesame")
      result = true;
    }
    if (this.state.issues["shellfishallergy"] === true && shellfish === true) {
      console.log("shellfish")
      result = true;
    }
    if (this.state.issues["soyallergy"] === true && soy === true) {
      console.log("soy")
      result = true;
    }
    if (this.state.issues["treenutsallergy"] === true && treenuts === true) {
      console.log("treenuts")
      result = true;
    }
    if (this.state.issues["wheatallergy"] === true && wheat === true) {
      console.log("wheat")
      result = true;
    }

    finding.push(eggs);
    finding.push(fish);
    finding.push(milk);
    finding.push(peanuts);
    finding.push(sesame);
    finding.push(shellfish);
    finding.push(soy);
    finding.push(treenuts);
    finding.push(wheat);
    this.setState({
      eggs: eggs,
      fish: fish,
      milk: milk,
      peanuts: peanuts,
      sesame: sesame,
      shellfish: shellfish,
      soy: soy,
      treenuts: treenuts,
      wheat: wheat,
      result: result,
      finding: finding,
    });
    return finding;
  }
  //ensures userPref() method is called after component mounts
  componentDidMount() {
    this.userPref();
  }
  render() {

    var ing = this.state.ingredientString;
    var Name = this.state.productName;
    var productBrand = this.state.productBrand;

    if (this.props.productName === undefined) {
      return (
          <FourOFour />
        )
     } else {

    return (
      <div className="resultContainer">
        <div className="result">
          <div className="resultTable">
            <h1 className="title">Search Results:</h1>
            <table>
              <tbody>
                <tr>
                  <td><h2>Product Name:</h2></td>
                  <td><h4>{Name}</h4></td>
                </tr>
                <tr>
                  <td><h2>Product Brand:</h2></td>
                  <td><h4>{productBrand}</h4></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="productPic">
            <img className="productPic" src={this.state.image} alt="Product" />
          </div>
        </div>
        <div className="prodResult">
          <div className="ingredient">
            <h2>Ingredient</h2>
            <div className="ing">{ing}</div>
          </div>

          <div className="finalresult">
            <h2>Result</h2>
            <UserResult finding={this.state.finding} issues={this.state.issues} />
            <div></div>
          </div>

        </div>
      </div>

    );
  }
  }
}

export default Result;