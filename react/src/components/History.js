import React, { Component } from 'react';
import axios from 'axios';
import Row from './Row';
class History extends Component {
	 constructor(props) {
        super(props);
        this.state = {
        objArray: [],
          userid: 123456,
          result: [],
          product: [],
          id:[]
        }
         this.userhistory = this.userhistory.bind(this);
     }
	userhistory() {
    let targetURL = "https://caneatthis.herokuapp.com/api/information/"+this.state.userid;
        axios.get(targetURL)
    .then((res) => {
      var objArray=res.data.data;
      this.setState({objArray})
       var result = objArray.map(function(a) {return a.result;});
        this.setState({result})
       var id = objArray.map(function(a) {return a.id;});
        this.setState({id})
        var product = objArray.map(function(a) {return a.product;});
        this.setState({product})
    })
    .then((res) => {
    console.log(this.state.product)
    console.log(this.state.result)
    console.log(this.state.id)
 })
}
 componentDidMount(){
this.userhistory();

}
  render() {
    return (
      <div className="history">
		    <h2>History</h2>
			   <table className="tableHistory">
					<Row objArray={this.state.objArray}/>
	  		 </table>
      </div>
    );
  }
}

export default History;