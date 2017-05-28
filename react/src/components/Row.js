import React, { Component } from 'react';
import axios from 'axios';
class Row extends Component{

  

  handleClick(key){
    console.log(key);
    let ans=window.confirm("Are you sure that you want to delete product number:" + key)
    console.log(ans)
    if(ans)
    {
      let targetURL = "https://caneatthis.herokuapp.com/api/information/"+key;
        axios.delete(targetURL)
    .then((res) => {
      alert("The product was deleted successfully")
      window.location.reload();
    })
    }
    } 

  




  render() {
    let advice;
    var result=this.props.objArray.map((d) => {
      
      if(!d.result)
        advice="yes you can eat it";
        else
          advice="No you can Not eat it";
      return( 
              <tr key={d.id} >
              <td >{d.product}</td>
              <td >{advice}</td>
              <td onClick={this.handleClick.bind(this,d.id)}  > x </td>
              </tr> 

            )
  });

    return (

      <tbody className="historyRow">
        <tr>
          <th>Product</th>
          <th>Can I eat this</th>
          <th> </th>
        </tr>
        {result}
      </tbody>

    )
}
}


export default Row;
