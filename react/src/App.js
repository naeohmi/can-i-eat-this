import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Profile from './components/Profile';
import Result from './components/Result';
import History from './components/History';
import FourOFour from './components/Four_o_Four';
import {
        BrowserRouter as Router,
        Route,
        Switch
        } from 'react-router-dom';

console.log("App.js is working.");
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upc: undefined,
      productName: undefined,
      ingredientList: [],
      issues: [],
      readOnly: false,
      ingredientString: " ",
      userid: undefined
    }
    this.selectedCheckboxesAdd = this.selectedCheckboxesAdd.bind(this);
    this.selectedCheckboxesUpdate = this.selectedCheckboxesUpdate.bind(this);
    this.changeState = this.changeState.bind(this);
    this.grabData = this.grabData.bind(this);
  }

   grabData(productBrand,upc, productName, ingredientList , ingredientString) {
     this.setState({
        upc: upc,
        productName: productName,
        ingredientList: ingredientList,
        ingredientString:ingredientString,
        productBrand:productBrand,
      }, function() {
        console.log(this.state.upc);
        console.log(this.state.productName);
        console.log(this.state.ingredientList);
        console.log(this.state.ingredientString);
        console.log(this.state.productBrand);
      });
    }

  selectedCheckboxesAdd(userid, issues, readOnly) {
    // console.log(issues);
    this.setState({ 
      userid: userid,
      issues: issues,
      readOnly: readOnly
    }, function() {
    // console.log(this.state.issues);
    // Calling the method to make a post to the database.
    this.addAllergies();
    });
  }

  selectedCheckboxesUpdate(userid, issues, readOnly) {
    // console.log(issues);
    // Changing the state of the issues array.
    this.setState({ 
      userid: userid,
      issues: issues,
      readOnly: readOnly
    }, function() {
    // console.log(this.state.issues);
    // Calling the method to make a put to the database.
    this.updateAllergies();
    });
  }

  addAllergies(){
    // console.log(this.state.issues);
    axios.post('https://caneatthis.herokuapp.com/api/allergies/', {
      userid: this.state.userid,
      eggsallergy: this.state.issues[0] === true ? true : false,
      fishallergy: this.state.issues[1] === true ? true : false,
      milkallergy: this.state.issues[2] === true ? true : false,
      peanutsallergy: this.state.issues[3] === true ? true : false,
      sesameallergy: this.state.issues[4] === true ? true : false,
      shellfishallergy: this.state.issues[5] === true ? true : false,
      soyallergy: this.state.issues[6] === true ? true : false,
      treenutsallergy: this.state.issues[7] === true ? true : false,
      wheatallergy: this.state.issues[8] === true ? true : false
      })
    .then((res) => {
      console.log(res);
      })
    .catch((error) => {
      console.log(error);
    });
  }

  updateAllergies(){
    // console.log(this.state.issues);
    axios.put('https://caneatthis.herokuapp.com/api/allergies/' + this.state.userid, {
      userid: this.state.userid,
      eggsallergy: this.state.issues[0] === true ? true : false,
      fishallergy: this.state.issues[1] === true ? true : false,
      milkallergy: this.state.issues[2] === true ? true : false,
      peanutsallergy: this.state.issues[3] === true ? true : false,
      sesameallergy: this.state.issues[4] === true ? true : false,
      shellfishallergy: this.state.issues[5] === true ? true : false,
      soyallergy: this.state.issues[6] === true ? true : false,
      treenutsallergy: this.state.issues[7] === true ? true : false,
      wheatallergy: this.state.issues[8] === true ? true : false
      })
    .then((res) => {
      console.log(res);
      })
    .catch((error) => {
      console.log(error);
    });
  }

  // For editing purposes.
  changeState(readOnly){
    this.setState({
      issues: [],
      readOnly: readOnly
    }, function() {
       console.log("The state of readOnly has been changed to " + this.state.readOnly);
    });
  }

  render() {
    return (
    <Router>
    <div className="wrapper">
      <Navigation />
        <Switch>
          <Route path="/" exact component={() => (<Home
                 grabData={this.grabData}
                 />) }/>
          <Route path="/profile" exact component={() => (<Profile 
                 selectedCheckboxesAdd={this.selectedCheckboxesAdd}
                 selectedCheckboxesUpdate={this.selectedCheckboxesUpdate}
                 userid={this.state.userid}
                 issues={this.state.issues}
                 readOnly={this.state.readOnly}
                 changeState={this.changeState}
                 />) }/>
          <Route path="/result" exact component={() => (<Result 
                 upc={this.state.upc}
                 productName={this.state.productName}
                 ingredientList={this.state.ingredientList}
                 productBrand={this.state.productBrand}
                 ingredientString={this.state.ingredientString}
                 />) }/>
          <Route path="/history" exact component={() => (<History />) }/>
          <Route path="/*" component={() => (<FourOFour />) }/>
        </Switch>
    </div>
    </Router>
    );
  }
}
export default App;