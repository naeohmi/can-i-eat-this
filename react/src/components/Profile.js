import React, { Component } from 'react';

class Profile extends Component {
  constructor(props){
    super(props)
    // console.log(this.props.issues);
    this.userPreferences = this.userPreferences.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  userPreferences(event){
  event.preventDefault();

  	// If user is saving information for first time (no userid):
  	if(this.props.userid === undefined) {
	    // Random userid.
		let userid = Math.floor((Math.random() * 99999999) + 1);

	    // Creating an array of true/false results, in alphabetical order.
		let issues =
	        [ this.refs.egg.checked, this.refs.fish.checked,
	        this.refs.milk.checked, this.refs.peanuts.checked,
	        this.refs.sesame.checked, this.refs.shellfish.checked,
	        this.refs.soy.checked, this.refs.treenuts.checked,
	        this.refs.wheat.checked ]
	    // console.log(issues);

	    // Passing the array "issues" to the seletedCheckboxes method.	
	    this.props.selectedCheckboxesAdd(userid, issues, true);
	  	}

  	// Else, if user have an already userid:
  	else {
	  	// Passing the current state (basically no change in userid.)
	  	let userid = this.props.userid;

	  	let issues =
	        [ this.refs.egg.checked, this.refs.fish.checked,
	        this.refs.milk.checked, this.refs.peanuts.checked,
	        this.refs.sesame.checked, this.refs.shellfish.checked,
	        this.refs.soy.checked, this.refs.treenuts.checked,
	        this.refs.wheat.checked ]

	    this.props.selectedCheckboxesUpdate(userid, issues, true);
  	}
  }

  // Call the method that turns readOnly false.
  handleEdit() {
  	// console.log('User press edit button.');
	this.props.changeState(false);
  }

  renderSave() {
  	if(this.props.readOnly === false) {
  	  return (
  	  	<button className="savePreferences">Save</button>
  	)}
  }

  renderEdit() {
  	if(this.props.readOnly === true) {
  	  return (
  	  	<button className="editPreferences" onClick={this.handleEdit}>Edit</button>
  	)}
  }

  render() {
  	// console.log(this.props.issues[0]);
    return (
      <div className="profile">
       <h2>User Preferences</h2>
       <p>Please, select the allergens that you would like to avoid.</p>
		<form onSubmit={this.userPreferences}>
		<div className="row">
		<div className="column">
		  <h3><input className="issuesCheckbox" type="checkbox" name="egg" ref="egg" 
		  checked={this.props.issues[0]} readOnly={this.props.readOnly}/>Egg</h3>
		    <h6>
		    Albumin<br/>
			Egg<br/>
			Eggnog<br/>
			Lysozyme<br/>
			Mayonnaise<br/>
			Meringue<br/>
			Ovalbumin<br/>
			Surimi<br/>
			</h6>
		  <h3><input className="issuesCheckbox" type="checkbox" name="peanuts" ref="peanuts" 
		  checked={this.props.issues[3]} readOnly={this.props.readOnly}/>Peanuts</h3>
		  	<h6>
		    Artificial nuts<br/>
		    nuts<br/>
		    Mandelonas<br/>
		    Peanut <br/>
			</h6>
		  <h3><input className="issuesCheckbox" type="checkbox" name="sesame" ref="sesame" 
		  checked={this.props.issues[4]} readOnly={this.props.readOnly}/>Sesame</h3>
		    <h6>
		    Benne, benne seed, benniseed<br/>
		    Gingelly<br/>
		    Gomasio<br/>
		    Halvah<br/>
		    Sesame flour<br/>
		    Sesame oil<br/>
		    Sesame paste<br/>
		    Sesame salt<br/>
		    Sesame seed<br/>
		    Sesamol<br/>
		    Sesamum indicum<br/>
		    Sesemolina<br/>
		   	Sim sim<br/>
		    Tahini, Tahina, Tehina<br/>
		    Til<br/>
		    </h6>
		  <h3><input className="issuesCheckbox" type="checkbox" name="shellfish" ref="shellfish" 
		  checked={this.props.issues[5]} readOnly={this.props.readOnly}/>Shell Fish</h3>
		    <h6>
		  	Barnacle<br/>
		    Crab<br/>
		    Crawfish<br/>
		    Krill<br/>
		    Lobster<br/>
		    Prawns<br/>
		    Shrimp<br/>
		    </h6>
		</div>
		<div className="column">
		  <h3><input className="issuesCheckbox" type="checkbox" name="fish" ref="fish" 
		  checked={this.props.issues[1]} readOnly={this.props.readOnly}/>Fish</h3>
		    <h6>
		    Anchovies<br/>
			Bass<br/>
			Catfish<br/>
			Cod<br/>
			Flounder<br/>
			Grouper<br/>
			Haddock<br/>
			Hake<br/>
			Halibut<br/>
			Herring<br/>
			Mahi Mahi<br/>
			Perch<br/>
			Pike<br/>
			Pollock<br/>
			Salmon<br/>
			Scrod<br/>
			Swordfish<br/>
			Sole<br/>
			Snapper<br/>
			Tilapia<br/>
			Trout<br/>
			Tuna<br/>
			</h6>
		  <h3><input className="issuesCheckbox" type="checkbox" name="treenuts" ref="treenuts" 
		  checked={this.props.issues[7]} readOnly={this.props.readOnly}/>Tree nuts</h3>
		    <h6>
			Almond<br/>
			Beechnut<br/>
			Butternut<br/>
			Cashew<br/>
			Chestnut<br/>
			Hazelnut<br/>
			Macadamia<br/>
			Nangai nut<br/>
			Natural nut extract<br/>
			Nut butters<br/>
			Nut meal<br/>
			Nut milk<br/>
			Nut paste<br/>
			Pecan<br/>
			Pesto<br/>
			Pili nut<br/>
			Pine nut<br/>
			Pistachio<br/>
			Praline<br/>
			Shea nut<br/>
			Walnut<br/>
			</h6>
		</div>
		<div className="column">
	      <h3><input className="issuesCheckbox" type="checkbox" name="milk" ref="milk" 
	      checked={this.props.issues[2]} readOnly={this.props.readOnly}/>Milk</h3>
	        <h6>
			Butter<br/>
			Buttermilk<br/>
			Casein<br/>
			Casein hydrolysate<br/>
			Caseinates<br/>
			Cheese<br/>
			Cottage cheese<br/>
			Cream<br/>
			Curds<br/>
			Custard<br/>
			Diacetyl<br/>
			Ghee<br/>
			Half-and-half<br/>
			Lactalbumin<br/>
			Llactoferrin<br/>
			Lactose<br/>
			Lactulose<br/>
			Milk<br/>
			Milk protein hydrolysate<br/>
			Pudding<br/>
			Recaldent<br/>
			Rennet casein<br/>
			Sour cream<br/>
			Sour milk solids<br/>
			Tagatose<br/>
			Whey<br/>
			Yogurt<br/>
			</h6>
		  <h3><input className="issuesCheckbox" type="checkbox" name="soy" ref="soy" 
		  checked={this.props.issues[6]} readOnly={this.props.readOnly}/>Soy</h3>
		    <h6>
		  	Edamame<br/>
		    Miso<br/>
		    Natto<br/>
		    Shoyu<br/>
		    Soy<br/>
		    Soya<br/>
		    Soybean<br/>
		    Soy protein<br/>
		    Soy sauce<br/>
		    Tamari<br/>
		    Tempeh<br/>
		    Textured vegetable protein<br/>
		    Tofu<br/>
		    </h6>
		  <h3><input className="issuesCheckbox" type="checkbox" name="wheat" ref="wheat" 
		  checked={this.props.issues[8]} readOnly={this.props.readOnly}/>Wheat</h3>
		    <h6>
		    Breed crumbs<br/>
		    Bulgur<br/>
		    Cereal extract<br/>
		    Club wheat<br/>
		    Couscous<br/>
		    Cracker meal<br/>
		    Durun<br/>
		    Einkorn<br/>
		    Emmer<br/>
		    Farina<br/>
		    Flour<br/>
		    Hydrolyzed wheat protein<br/>
		    </h6>
		</div>
		</div>
		  <div className="buttons">
		    {this.renderSave()}
		  </div>
		</form>
		  <div className="buttons">
			{this.renderEdit()}
		  </div>
      </div>
    );
  }
}

export default Profile;