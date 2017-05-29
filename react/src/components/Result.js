
import React, { Component } from 'react';
import axios from 'axios';
import UserResult from './UserResult';
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
          finding:[ " "],
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
        this.addproduct=this.addproduct.bind(this);
        this.grabProductImage=this.grabProductImage.bind(this);
  }

  grabData() {
      this.setState({
        ingredientList: this.props.ingredientList,
        ingredientString:this.props.ingredientString,
        productBrand:this.props.productBrand,
        upc: this.props.upc,
        productName:this.props.productName,
      }
        ,function() {

         var finding = this.filter()
         this.setState({finding:finding});
         this.grabProductImage()
      });
      console.log(this.search('almond'));
    }

    //Make an axios call to grab image


    grabProductImage() {
  axios.get('http://world.openfoodfacts.org/api/v0/product/' + this.state.upc+".json")

    .then((res) => {
        if (res.data.product.image_url) {
            var image = res.data.product.image_url;
            this.setState({ image: image });
            console.log(this.state.image);
        } else {
            console.log("empty");
        }
    }).catch((error) => {
      console.log(error);
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

    addproduct() {

    axios.post('https://caneatthis.herokuapp.com/api/information/', {
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
      treenuts:this.state.treenuts,
      wheat:this.state.wheat,
      result:this.state.result
      })
    .then((res) => {
      console.log(res);
      })
    .catch((error) => {
      console.log(error);
    });
  }


 search(query) {
  return this.state.ingredientList.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}


  filter(){
    var eggs= false;
    var fish= false;
    var milk= false;
    var peanuts= false;
    var sesame= false;
    var shellfish= false;
    var soy= false;
    var treenuts= false;
    var wheat= false;
    var result= false;
    var finding=[];
  console.log("I'm filtering");
  
  //if(this.state.issues["eggsallergy"]){
      
      if(this.search('egg').length !== 0){
        console.log("donot eat it");
        eggs= true ;
        result= true ;
      }
       if(this.search('Mayonnaise').length !== 0){
        console.log("donot eat it");
        eggs= true ;
        result= true ;
      }

    if(this.search('Catfish').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('fish').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Bass').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Cod').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Anchovies').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Flounder').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Grouper').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Haddock').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Hake').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Halibut').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Herring').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Mahi').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Perch').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Pike').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Pollock').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Salmon').length !== 0){
        console.log("donot eat it");
        fish= true ;
        result= true ;
      }
       if(this.search('Swordfish').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Sole').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Snapper').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
        if(this.search('Tilapia').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Trout').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
       if(this.search('Tuna').length !== 0){
        console.log("donot eat it")
        fish= true ;
        result= true ;
      }
    
      if(this.search('milk').length !== 0){
        console.log("donot eat it");
        milk= true ;
        result= true ;
      }
       if(this.search('Butter').length !== 0){
        console.log("donot eat it");
        milk= true ;
        result= true ;
      }
       if(this.search('Cheese').length !== 0){
        console.log("donot eat it");
        milk= true ;
        result= true ;
      }
       if(this.search('Cream').length !== 0){
        console.log("donot eat it");
        milk= true ;
        result= true ;
      }
       if(this.search('Ghee').length !== 0){
        console.log("donot eat it");
        milk= true ;
        result= true ;
      }
       if(this.search('Yogurt').length !== 0){
        console.log("donot eat it");
        milk= true ;
        result= true ;
      }
      
      
      if(this.search('peanut').length !== 0) {
        console.log("donot eat it");
        peanuts= true;
        result=true;
      }
       if(this.search('nut').length !== 0){
        console.log("donot eat it");
        peanuts= true;
        result=true;
      }
      
        
      if(this.search('sesame').length !== 0){
        console.log("donot eat it");
        sesame= true ;
        result= true ;
      }
       if(this.search('Tahini').length !== 0){
        console.log("donot eat it");
        sesame= true ;
        result= true ;
      }
      
        
          if(this.search('soy').length !== 0){
            console.log("donot eat it");
            soy= true ;
            result= true ;
          }
           if(this.search('miso').length !== 0){
            console.log("donot eat it");
            soy= true ;
            result= true ;
          }
           if(this.search('Edamame').length !== 0){
            console.log("donot eat it");
            soy= true ;
            result= true ;
          }
           if(this.search('Tofu').length !== 0){
            console.log("donot eat it");
            soy= true ;
            result= true ;
          }
          
    
   
      if(this.search('almond').length !== 0){
        console.log("donot eat it")
        treenuts= true ;
        result= true ;
      }
       if(this.search('Cashew').length !== 0){
        console.log("donot eat it");
        treenuts= true ;
        result= true ;
      }
       if(this.search('Chestnut').length !== 0){
        console.log("donot eat it");
        treenuts= true ;
        result= true ;
      }
       if(this.search('Hazelnut').length !== 0){
        console.log("donot eat it");
        treenuts= true ;
        result= true ;
      }
       if(this.search('Macadamia').length !== 0){
        console.log("donot eat it");
        treenuts= true ;
        result= true ;
      }
       if(this.search('Pecan').length !== 0){
        console.log("donot eat it")
        treenuts= true ;
        result= true ;
      }
       if(this.search('Pine').length !== 0){
        console.log("donot eat it")
        treenuts= true ;
        result= true ;
      }
       if(this.search('Pistachio').length !== 0){
        console.log("donot eat it")
        treenuts= true ;
        result= true ;
      }
       if(this.search('Walnut').length !== 0){
        console.log("donot eat it")
        treenuts= true ;
        result= true ;
      }
   
      if(this.search('wheat').length !== 0){
        console.log("donot eat it") ; 
        wheat= true ;
        result= true ;
      }
       if(this.search('Bread').length !== 0){
        console.log("donot eat it")
        wheat= true ;
        result= true ;
      }
       if(this.search('Bulgur').length !== 0){
        console.log("donot eat it")
        wheat= true ;
        result= true ;
      }
       if(this.search('Couscous').length !== 0){
        console.log("donot eat it")
        wheat= true ;
        result= true ;
      }
      
       
      if(this.search('Barnacle').length !== 0){
        console.log("donot eat it");
        shellfish= true ;
        result= true ;
      }
       if(this.search('Crab').length !== 0){
        console.log("donot eat it");
        shellfish= true ;
        result= true ;
      }
       if(this.search('Crawfish').length !== 0){
        console.log("donot eat it");
        shellfish= true ;
        result= true ;
      }
       if(this.search('Krill').length !== 0){
        console.log("donot eat it");
        shellfish= true ;
        result= true ;
      }
       if(this.search('Lobster').length !== 0){
        console.log("donot eat it");
        shellfish= true ;
        result= true ;
      }
       if(this.search('Prawns').length !== 0){
        console.log("donot eat it");
        shellfish= true ;
        result= true ;
      }
       if(this.search('Shrimp').length !== 0){
        console.log("donot eat it");
        shellfish= true ;
        result= true ;
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
        finding:finding,
      }
        ,function() {

        this.addproduct()
      });
   return finding;
 }

  componentDidMount(){

    this.userPref();
}

  render() {
    var ing = this.state.ingredientString;
    var Name = this.state.productName;
    var productBrand=this.state.productBrand;


  return (
  <div className="resultContainer">
    <div className="result">
    <div className="resultTable">
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
      <UserResult finding={this.state.finding} issues={this.state.issues}/>
    </div>
   </div>

    <div className="prodResult">
      <div className="ingredient">
        <h2>Ingredient</h2>
      <div className="ing">{ing}</div>
    </div>

    <div className="finalresult">
      <h2>Result</h2>
      <UserResult finding={this.state.finding} issues={this.state.issues}/>
      <div></div>
    </div>

  </div>
</div>

    );
  }
}

export default Result;