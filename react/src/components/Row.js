import React, { Component } from 'react';
import axios from 'axios';

class Row extends Component {
  //alerts the user to product info and deletion 
  handleClick(key) {
    console.log(key);
    let ans = window.confirm(`Are you sure that you want to delete product number:${key}`)
    console.log(ans)
    if (ans) {
      let targetURL = `https://caneatthis.herokuapp.com/api/information/${key}`;
      axios.delete(targetURL)
        .then((res) => {
          alert("The product was deleted successfully")
          window.location.reload();
        })
    }
  }
  //renders the result on the screen
  render() {
    let advice;
    var result = this.props.objArray.map((d) => {

      if (!d.result)
        advice = "yes you can eat it";
      else
        advice = "No you can Not eat it";
      return (
        <tr key={d.id} >
          <td className="prod">{d.product}</td>
          <td className="advice">{advice}</td>
          <td className="action" onClick={this.handleClick.bind(this, d.id)}  > x </td>
          <td className="thumbnail" ><center><img className="thumbnail" alt="thumbnail" src={d.img} /></center></td>
        </tr>
      )
    });

    return (
      <tbody className="historyRow">
        <tr>
          <th className="titleRow">Product</th>
          <th className="titleRow">Can I eat this</th>
          <th className="titleRow">Action</th>
          <th className="titleRow">Picture</th>
        </tr>
        {result}
      </tbody>
    );
  }
}
export default Row;