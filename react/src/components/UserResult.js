import React, { Component } from 'react';
class UserResult extends Component{
 
  constructor(props) {
    console.log(props) 
    super(props)
  }
  render() {
    var issues= [];
    var Obj=this.props.issues;
    for (var prop in Obj) {
    issues.push(Obj[prop]);
}

    console.log(issues);

    const images=["/images/eggs.png","/images/fish.png","/images/milk.png","/images/peanuts.png","/images/sesame.png","/images/shellfish.png","/images/soy.png","/images/treenuts.png","/images/wheat.png"];
    let fact , advice;
    console.log(this.props.finding)
    let result=this.props.finding.map((d,i) => {
    console.log("contained food"+ d)
      if(issues[i+1]===true && d===true){
        advice="allergy warning: This product is not for you";
        console.log("allergy"+issues[i+1]+"contained food"+d)
      }
      else
        advice=" ";
      if(d)
        fact="✔️ The product contains ";
        else
        fact="✖︎ The product does not contain";

    return( 
      <tr key={i} >
        <td >{fact}</td>
        <td ><img src={images[i]} alt="allergies" /></td>
        <td >{advice}</td>
      </tr> 
    );
   }
  )

    return (
      <center>
       <table>
        <tbody className="historyRow">
         {result}
        </tbody>
       </table>
      </center>
     );
    }
   }

export default UserResult;
