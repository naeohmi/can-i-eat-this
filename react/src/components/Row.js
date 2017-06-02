import React, { Component } from 'react';
import axios from 'axios';

class Row extends Component {
  constructor(props) {
  super(props);
    this.state = {
      userid: "123456",
      issues: {},
      result: " ",
    }
    this.userPref = this.userPref.bind(this);
  }
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
  //get user:123456 allergies from the database

  userPref() {
    let targetURL = `https://caneatthis.herokuapp.com/api/allergies/${this.state.userid}`;
    axios.get(targetURL)
      .then((res) => {
        var issues = res.data.data;
        this.setState({ issues })
        console.log(this.state.issues)
      })
  }
  componentDidMount() {
    this.userPref();
  }
  //renders the result on the screen
  render() {
    let eggs , milk,peanuts,soy,fish,shellfish,sesame,treennut,wheat
    let advice=" ";
    var result = this.props.objArray.map((d) => {
    let flag=false;
    // check the conflict between the food and the user allergy
    if (this.state.issues["eggsallergy"] === true && d.eggs === true) {
      console.log("egg")
      flag = true;
    }
    if (this.state.issues["fishallergy"] === true && d.fish === true) {
      console.log("fish")
      flag = true;
    }
    if (this.state.issues["milkallergy"] === true && d.milk === true) {
      console.log("milk")
      flag = true;
    }
    if (this.state.issues["peanutsallergy"] === true && d.peanuts === true) {
      console.log("peanuts")
      flag = true;
    }
    if (this.state.issues["sesamesallergy"] === true && d.sesame === true) {
      console.log("sesame")
      flag = true;
    }
    if (this.state.issues["shellfishallergy"] === true && d.shellfish === true) {
      console.log("shellfish")
      flag = true;
    }
    if (this.state.issues["soyallergy"] === true && d.soy === true) {
      console.log("soy")
      flag = true;
    }
    if (this.state.issues["treenutsallergy"] === true && d.treenuts === true) {
      console.log("treenuts")
      flag = true;
    }
    if (this.state.issues["wheatallergy"] === true && d.wheat === true) {
      console.log("wheat")
      flag = true;
    }
    // give the user advice according to the conflict test
    if (!flag)
      advice = "Yes you can eat!";
    else
      advice = "No you can't eat!";


    

      // display the food problems
      eggs= d.eggs===true? "✔️":"✖︎";
      fish= d.fish===true? "✔️":"✖︎";
      milk= d.milk===true? "✔️":"✖︎";
      peanuts= d.peanuts===true? "✔️":"✖︎";
      sesame= d.sesame===true? "✔️":"✖︎";
      shellfish= d.shellfish===true? "✔️":"✖︎";
      soy= d.soy===true? "✔️":"✖︎";
      treennut= d.treennut===true? "✔️":"✖︎";
      wheat= d.wheat===true? "✔️":"✖︎";
      return (
        <tr key={d.id} >
          <td className="prod">{d.product}</td>
          <td className="TorF">{eggs}</td>
          <td className="TorF">{fish}</td>
          <td className="TorF">{milk}</td>
          <td className="TorF">{peanuts}</td>
          <td className="TorF">{sesame}</td>
          <td className="TorF">{shellfish}</td>
          <td className="TorF">{soy}</td>
          <td className="TorF">{treennut}</td>
          <td className="TorF">{wheat}</td>
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
          <th className='icon'><img alt="egg" src="/images/icons/egg-color.png"/></th>
          <th className='icon'><img alt="fish" src="/images/icons/fish-color.png"/></th>
          <th className='icon'><img alt="milk" src="/images/icons/milk-color.png"/></th>
          <th className='icon'><img alt="peanut" src="/images/icons/icons-blackandwhite/peanut-bw.png"/></th>
          <th className='icon'><img alt="sesame" src="/images/icons/sesame-color.png"/></th>
          <th className='icon'><img alt="shellfish" src="/images/icons/shellfish-color.png"/></th>
          <th className='icon'><img alt="soy" src="/images/icons/soy-color.png"/></th>
          <th className='icon'><img alt="treennut" src="/images/icons/treenut-color.png"/></th>
          <th className='icon'><img alt="wheat" src="/images/icons/wheat-color.png"/></th>
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