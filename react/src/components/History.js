import React, { Component } from 'react';
import axios from 'axios';
import Row from './Row';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: undefined,
      eggs: undefined,
      fish: undefined,
      milk: undefined,
      peanuts: undefined,
      sesame: undefined,
      shellfish: undefined,
      soy:undefined,
      treenuts:undefined,
      wheat:undefined,
      objArray: [],
      userid: 123456, //hard coded for now, will update after Auth 
      result: [],
      product: [],
      id: [],
      img: " "
    }
    this.userhistory = this.userhistory.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  //grabs the user history from the database

  userhistory() {
    let targetURL = `https://caneatthis.herokuapp.com/api/information/${this.state.userid}`
    //make axios call to database
    axios.get(targetURL)
      .then((res) => {
        console.log(res);
        let objArray = res.data.data;
        console.log(objArray);
        //sets the state for the object array
        this.setState({
          objArray
        });
        
      })
  }

  


  //calls the method after loading
  componentDidMount() {
    this.userhistory();
  }
  //reders the results
  render() {
    return (
      <div className="history">
        <h2 className="title">History</h2>
        <table className="tableHistory">
          <Row objArray={this.state.objArray} />
        </table>
      </div>
    );
  }
}

export default History;