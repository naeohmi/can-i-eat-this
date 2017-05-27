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
      issues: [null, null, null, null, null, null, null, null, null]
    }
    this.selectedCheckboxes = this.selectedCheckboxes.bind(this);
    this.grabData = this.grabData.bind(this);
  }

   grabData(upc, productName, ingredientList) {
      this.setState({
        upc: upc,
        productName: productName,
        ingredientList: ingredientList,
      }, function() {
        console.log(this.state.upc);
        console.log(this.state.productName);
        console.log(this.state.ingredientList);
      });
    }

  // Receiving the "issues" array from Profile component.
  selectedCheckboxes(issues) {
    // console.log(issues);
    // Changing the state of the issues array.
    this.setState({ issues: issues }, function() {
      // console.log(this.state.issues);
      // Calling the method to make a post to the database.
      this.addAllergies();
    });
  }

  addAllergies(){
    console.log(this.state.issues);
    axios.post('https://caneatthis.herokuapp.com/api/allergies/', {
      userid: Math.floor((Math.random() * 99999999) + 1),
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
                 selectedCheckboxes={this.selectedCheckboxes}
                 issues={this.state.issues}
                 />) }/>
          <Route path="/result" exact component={() => (<Result 
                 upc={this.state.upc}
                 productName={this.state.productName}
                 ingredientList={this.state.ingredientList}
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