import React, { Component } from 'react';
import axios from 'axios';
class Result extends Component {

  constructor(props) { 
    console.log(props)
    super(props);
     this.state = {
          upc: undefined,
          productName: undefined,
          ingredientList: [],
          userid: 123456,
          issues: {},
        }
        this.userPref = this.userPref.bind(this);
        this.grabData = this.grabData.bind(this);
        this.filter = this.filter.bind(this);

  }

  grabData() {
      this.setState({
        upc: this.props.upc,
        productName: this.props.productName,
        ingredientList: this.props.ingredientList,
      }, function() {
        console.log(this.state.upc);
        console.log(this.state.productName);
        console.log(this.state.ingredientList);
      });
    }

    userPref() {
    let targetURL = "https://caneatthis.herokuapp.com/api/allergies/"+this.state.userid;
        axios.get(targetURL)
    .then((res) => {
      var issues=res.data.data;
      this.setState({issues})
       console.log(this.state.issues)
       this.filter();
       
       
    })
  }

  filter(){
    console.log("true")
     if(this.state.issues["eggsallergy"]){
      console.log("true")}
      if(this.state.issues["fishallergy"]){
        console.log("true")}
        if(this.state.issues["milkallergy"]){
          console.log("true")}
          if(this.state.issues["peanutsallergy"]){
            console.log("true")}
            if(this.state.issues["sesameallergy"]){
              console.log("true")}
              if(this.state.issues["soyallergy"]){
                console.log("true")}
                if(this.state.issues["treenutsallergy"]){
                  console.log("true")
                }

  }

  componentDidMount(){
this.userPref();
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
            <table className="tableResult">
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