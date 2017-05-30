import React, { Component } from 'react';
import axios from 'axios';
import Row from './Row';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        //sets the state for the object array
        this.setState({
          objArray
        });
        let result = objArray.map(function (a) {
          return a.result;
        });
        //sets the state for the result
        this.setState({
          result
        })
        //maps through the object array
        let id = objArray.map(function (a) {
          return a.id;
        });
        //sets the state of the ID
        this.setState({
          id
        })
        //again for the product
        let product = objArray.map(function (a) {
          return a.product;
        });
        this.setState({
          product
        })
        //again for the image
        let img = objArray.map(function (a) {
          return a.img;
        });
        this.setState({
          img
        })
      })
      .then((res) => {
        console.log(this.state.product)
        console.log(this.state.result)
        console.log(this.state.id)
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