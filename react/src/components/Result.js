import React, { Component } from 'react';
import axios from 'axios';
class Result extends Component {

  constructor(props) { 
    //console.log(props)
    super(props);
     this.state = {
          upc: undefined,
          productName: undefined,
          ingredientList: [],
          ingredientString: " ",
          userid: 123456,
          issues: {},
          productBrand: " ",
          findings :{
            "userid" : 123456,
            "barcode": " ",
            "product":" ",
            "eggs": false,
            "fish": false,
            "milk": false,
            "peanuts": false,
            "sesame": false,
            "shellfish": false,
            "soy": false,
            "treenuts": false,
            "wheat": false,
            "result": false,
  }
        }
        this.userPref = this.userPref.bind(this);
        this.grabData = this.grabData.bind(this);
        this.filter = this.filter.bind(this);
        this.search = this.search.bind(this);
  }

  grabData() {
      this.setState({
        ingredientList: this.props.ingredientList,
        ingredientString:this.props.ingredientString,
        productBrand:this.props.productBrand,
      }
        ,function() {
        this.setState.findings.barcode(this.props.upc);
        this.setState.findings.product(this.props.productName);//console.log(this.state.upc);
        //console.log(this.state.productName);
        //console.log(this.state.ingredientList);
         //console.log(this.state.ingredientString);
         this.filter()
      });
          }

    userPref() {
    let targetURL = "https://caneatthis.herokuapp.com/api/allergies/"+this.state.userid;
        axios.get(targetURL)
    .then((res) => {
      var issues=res.data.data;
      this.setState({issues})
       console.log(this.state.issues)
    }).then(()=>{
      this.grabData();
      
    })
  }


 search(query) {
  return this.state.ingredientList.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}


analysingresult(){

};

  filter(){
 console.log("I'm filtering")
   

    if(this.state.issues["eggsallergy"]){
      console.log("user with egg allergy")
      if(this.search('egg').length !== 0){
        console.log("donot eat it")
        this.setState.findings.eggs(true)}
      else if(this.search('Mayonnaise').length !== 0){
        console.log("donot eat it")
        this.setState.findings.eggs(true)}
      else
        console.log("you can eat that")
    }
   if(this.state.issues["fishallergy"]){
      console.log("user with fish allergy")
      if(this.search('Catfish').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('fish').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Bass').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Cod').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Anchovies').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Flounder').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Grouper').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Haddock').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Hake').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Halibut').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Herring').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Mahi').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Perch').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Pike').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Pollock').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Salmon').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Swordfish').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Sole').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Snapper').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
       else if(this.search('Tilapia').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Trout').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else if(this.search('Tuna').length !== 0){
        console.log("donot eat it")
        this.setState.findings.fish(true)}
      else
        console.log("you can eat that");
     
    }
     if(this.state.issues["milkallergy"]){
     console.log("user with milk allergy")
      if(this.search('milk').length !== 0)
        console.log("donot eat it")
      else if(this.search('Butter').length !== 0)
        console.log("donot eat it")
      else if(this.search('Cheese').length !== 0)
        console.log("donot eat it")
      else if(this.search('Cream').length !== 0)
        console.log("donot eat it")
      else if(this.search('Ghee').length !== 0)
        console.log("donot eat it")
      else if(this.search('Yogurt').length !== 0)
        console.log("donot eat it")
      else
        console.log("you can eat that")
    }
     if(this.state.issues["peanutsallergy"]){
      console.log("user with peanut allergy")
      if(this.search('peanut').length !== 0)
        console.log("donot eat it")
      else if(this.search('nut').length !== 0)
        console.log("donot eat it")
      else
        console.log("you can eat that")
    }
     if(this.state.issues["sesameallergy"]){
     console.log("user with sesame allergy")
      if(this.search('sesame').length !== 0)
        console.log("donot eat it")
      else if(this.search('Tahini').length !== 0)
        console.log("donot eat it")
      else
        console.log("you can eat that")
    }
     if(this.state.issues["soyallergy"]){
      console.log("user with Soy allergy")
      if(this.search('soy').length !== 0)
        console.log("donot eat it")
      else if(this.search('miso').length !== 0)
        console.log("donot eat it")
      else if(this.search('Edamame').length !== 0)
        console.log("donot eat it")
      else if(this.search('Tofu').length !== 0)
        console.log("donot eat it")
      else
        console.log("you can eat that")
       }
     if(this.state.issues["treenutsallergy"]){
      console.log("user with tree nut allergy")
      if(this.search('Almond').length !== 0)
        console.log("donot eat it")
      else if(this.search('Cashew').length !== 0)
        console.log("donot eat it")
      else if(this.search('Chestnut').length !== 0)
        console.log("donot eat it")
      else if(this.search('Hazelnut').length !== 0)
        console.log("donot eat it")
      else if(this.search('Macadamia').length !== 0)
        console.log("donot eat it")
      else if(this.search('Pecan').length !== 0)
        console.log("donot eat it")
      else if(this.search('Pine').length !== 0)
        console.log("donot eat it")
      else if(this.search('Pistachio').length !== 0)
        console.log("donot eat it")
      else if(this.search('Walnut').length !== 0)
        console.log("donot eat it")
      else
        console.log("you can eat that")
       }
    
      if(this.state.issues["wheatsallergy"]){
        console.log("user with wheat allergy")
        if(this.search('wheat').length !== 0)
        console.log("donot eat it")
        else if(this.search('Bread').length !== 0)
          console.log("donot eat it")
        else if(this.search('Bulgur').length !== 0)
          console.log("donot eat it")
        else if(this.search('Couscous').length !== 0)
          console.log("donot eat it")
         else
            console.log("you can eat that")
        }
     if(this.state.issues["shellfishallergy"]){
      console.log("user with Shell fish allergy")
      if(this.search('Barnacle').length !== 0)
        console.log("donot eat it")
      else if(this.search('Crab').length !== 0)
        console.log("donot eat it")
      else if(this.search('Crawfish').length !== 0)
        console.log("donot eat it")
      else if(this.search('Krill').length !== 0)
        console.log("donot eat it")
      else if(this.search('Lobster').length !== 0)
        console.log("donot eat it")
      else if(this.search('Prawns').length !== 0)
        console.log("donot eat it")
      else if(this.search('Shrimp').length !== 0)
        console.log("donot eat it")
      else
        console.log("you can eat that")
      }
  }
  componentDidMount(){
this.userPref();


}


  render() {
    var ing = this.state.ingredientString;
    var Name = this.state.findings.product;
    var barcode=this.state.findings.barcode;
    var productBrand=this.state.productBrand;
    var result
    return (
           <div className="resultContainer">
              <div className="result">
                <div className="resultTable">
                  <table>
                    <tr>
                      <td><h2>Product Name:</h2></td>
                      <td><h4>{Name}</h4></td>
                    </tr>
                    <tr>
                      <td><h2>Product Brand:</h2></td>
                      <td><h4>{productBrand}</h4></td>
                    </tr>
                   </table>
                  </div>
                 <div className="productPic">
                    <a href="http://placehold.it"><img src="http://placehold.it/300x300" alt="Product"/></a>
                 </div>
                </div>
                <br/>
                <div className="Ingredient">
                  <h2>Ingredient</h2>
                  <div>{ing}</div>
                </div>
                <br/>
                <div className="finalresult">
                  <h2>result</h2>
                  <div></div>
                </div>
              </div>
    );
  }
}

export default Result;