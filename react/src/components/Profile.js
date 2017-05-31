import React, { Component } from 'react';

console.log('Profile.js is working.');

class Profile extends Component {
	constructor(props) {
		super(props)
		// console.log(this.props.issues);
		this.userPreferences = this.userPreferences.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
	}

	// When user click save button:
	userPreferences(event) {
		event.preventDefault();

		// If user is saving information for first time (meaning that have no userid):
		if (this.props.userid === undefined) {

			// Then, generates a random userid.
			let userid = Math.floor((Math.random() * 99999999) + 1);
			console.log("User id: " + userid);

			// Creating an array of true/false results, in alphabetical order.
			// True means checked, while false is not checked.
			let issues =
				[this.refs.egg.checked, this.refs.fish.checked,
				this.refs.milk.checked, this.refs.peanuts.checked,
				this.refs.sesame.checked, this.refs.shellfish.checked,
				this.refs.soy.checked, this.refs.treenuts.checked,
				this.refs.wheat.checked]
			console.log(issues);

			// Passing the array "issues" to the addCheckboxes method.	
			this.props.addCheckboxes(userid, issues, true);
		}

		// Else, if user have an already userid:
		else {
			// Passing the current state (basically no change in userid.)
			let userid = this.props.userid;
			console.log("User id: " + userid);

			let issues =
				[this.refs.egg.checked, this.refs.fish.checked,
				this.refs.milk.checked, this.refs.peanuts.checked,
				this.refs.sesame.checked, this.refs.shellfish.checked,
				this.refs.soy.checked, this.refs.treenuts.checked,
				this.refs.wheat.checked]
			console.log(issues);

			// Passing the array "issues" to the updateCheckboxes method.	
			this.props.updateCheckboxes(userid, issues, true);
		}
	}

	findUserID(event) {
		let userid = this.refs.findUserID.value;
		console.log("Getting information from the user id: " + userid);
		this.props.readAllergies(userid);
	}

	// Call the method that turns readOnly false.
	handleEdit() {
		// console.log('User press the edit button.');
		this.props.changeState(false);
	}

	renderSave() {
		if (this.props.readOnly === false) {
			return (
				<button className="savePreferences">Save</button>
			)
		}
	}

	renderEdit() {
		if (this.props.readOnly === true) {
			return (
				<button className="editPreferences" onClick={this.handleEdit}>Edit</button>
			)
		}
	}

	render() {
		const images = [
			"/images/icons/egg-color.png",
			"/images/icons/fish-color.png",
			"/images/icons/milk-color.png",
			"/images/icons/icons-blackandwhite/peanut-bw.png",
			"/images/icons/sesame-color.png",
			"/images/icons/shellfish-color.png",
			"/images/icons/soy-color.png",
			"/images/icons/treenut-color.png",
			"/images/icons/wheat-color.png",
		];
		// console.log(this.props.issues[0]);
		return (
			<div className="profile">
				<h2 className="title">User Preferences</h2>
				<div className="buttons">
					<p className="paragraph">Input your userid here to retrieve your data!</p>
					<input
						type="text"
						placeholder="Get my data!"
						ref="findUserID"
						className="findUserID"
					/>
					<button className="findUser" onClick={this.findUserID.bind(this)}>Find</button>
				</div>
				<p className="paragraph">Please, select the allergens that you would like to avoid.</p>
				<form onSubmit={this.userPreferences}>
					<div className="row">
						<div className="column">
							<h3><input className="issuesCheckbox" type="checkbox" name="egg" ref="egg"
								checked={this.props.issues[0]} readOnly={this.props.readOnly} />Egg</h3>
							<span className="icons"><img src={images[0]} alt="egg-allergen-icon" /></span>
							<h6>
								Albumin<br />
								Egg<br />
								Eggnog<br />
								Lysozyme<br />
								Mayonnaise<br />
								Meringue<br />
								Ovalbumin<br />
								Surimi<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="sesame" ref="sesame"
								checked={this.props.issues[4]} readOnly={this.props.readOnly} />Sesame</h3>
							<span className="icons"><img src={images[4]} alt="sesame-allergen-icon" /></span>
							<h6>
								Benne, benne seed, benniseed<br />
								Gingelly<br />
								Gomasio<br />
								Halvah<br />
								Sesame flour<br />
								Sesame oil<br />
								Sesame paste<br />
								Sesame salt<br />
								Sesame seed<br />
								Sesamol<br />
								Sesamum indicum<br />
								Sesemolina<br />
								Sim sim<br />
								Tahini, Tahina, Tehina<br />
								Til<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="wheat" ref="wheat"
								checked={this.props.issues[8]} readOnly={this.props.readOnly} />Wheat</h3>
							<span className="icons"><img src={images[8]} alt="wheat-allergen-icon" /></span>
							<h6>
								Breed crumbs<br />
								Bulgur<br />
								Cereal extract<br />
								Club wheat<br />
								Couscous<br />
								Cracker meal<br />
								Durun<br />
								Einkorn<br />
								Emmer<br />
								Farina<br />
								Flour<br />
								Hydrolyzed wheat protein<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="peanuts" ref="peanuts"
								checked={this.props.issues[3]} readOnly={this.props.readOnly} />Peanuts</h3>
							<span className="icons"><img src={images[3]} alt="peanuts-allergen-icon" /></span>
							<h6>
								Artificial nuts<br />
								nuts<br />
								Mandelonas<br />
								Peanut <br />
							</h6>
						</div>
						<div className="column">
							<h3><input className="issuesCheckbox" type="checkbox" name="fish" ref="fish"
								checked={this.props.issues[1]} readOnly={this.props.readOnly} />Fish</h3>
							<span className="icons"><img src={images[1]} alt="fish-allergen-icon" /></span>
							<h6>
								Anchovies<br />
								Bass<br />
								Catfish<br />
								Cod<br />
								Flounder<br />
								Grouper<br />
								Haddock<br />
								Hake<br />
								Halibut<br />
								Herring<br />
								Mahi Mahi<br />
								Perch<br />
								Pike<br />
								Pollock<br />
								Salmon<br />
								Scrod<br />
								Swordfish<br />
								Sole<br />
								Snapper<br />
								Tilapia<br />
								Trout<br />
								Tuna<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="treenuts" ref="treenuts"
								checked={this.props.issues[7]} readOnly={this.props.readOnly} />Tree nuts</h3>
							<span className="icons"><img src={images[7]} alt="treenut-allergen-icon" /></span>
							<h6>
								Almond<br />
								Beechnut<br />
								Butternut<br />
								Cashew<br />
								Chestnut<br />
								Hazelnut<br />
								Macadamia<br />
								Nangai nut<br />
								Natural nut extract<br />
								Nut butters<br />
								Nut meal<br />
								Nut milk<br />
								Nut paste<br />
								Pecan<br />
								Pesto<br />
								Pili nut<br />
								Pine nut<br />
								Pistachio<br />
								Praline<br />
								Shea nut<br />
								Walnut<br />
							</h6>
						</div>
						<div className="column">
							<h3><input className="issuesCheckbox" type="checkbox" name="milk" ref="milk"
								checked={this.props.issues[2]} readOnly={this.props.readOnly} />Milk</h3>
							<span className="icons"><img src={images[2]} alt="milk-allergen-icon" /></span>
							<h6>
								Butter<br />
								Buttermilk<br />
								Casein<br />
								Casein hydrolysate<br />
								Caseinates<br />
								Cheese<br />
								Cottage cheese<br />
								Cream<br />
								Curds<br />
								Custard<br />
								Diacetyl<br />
								Ghee<br />
								Half-and-half<br />
								Lactalbumin<br />
								Llactoferrin<br />
								Lactose<br />
								Lactulose<br />
								Milk<br />
								Milk protein hydrolysate<br />
								Pudding<br />
								Recaldent<br />
								Rennet casein<br />
								Sour cream<br />
								Sour milk solids<br />
								Tagatose<br />
								Whey<br />
								Yogurt<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="shellfish" ref="shellfish"
								checked={this.props.issues[5]} readOnly={this.props.readOnly} />Shell Fish</h3>
							<span className="icons"><img src={images[5]} alt="shellfish-allergen-icon" /></span>
							<h6>
								Barnacle<br />
								Crab<br />
								Crawfish<br />
								Krill<br />
								Lobster<br />
								Prawns<br />
								Shrimp<br />
							</h6>
							<h3><input className="issuesCheckbox" type="checkbox" name="soy" ref="soy"
								checked={this.props.issues[6]} readOnly={this.props.readOnly} />Soy</h3>
							<span className="icons"><img src={images[6]} alt="soy-allergen-icon" /></span>
							<h6>
								Edamame<br />
								Miso<br />
								Natto<br />
								Shoyu<br />
								Soy<br />
								Soya<br />
								Soybean<br />
								Soy protein<br />
								Soy sauce<br />
								Tamari<br />
								Tempeh<br />
								Textured vegetable protein<br />
								Tofu<br />
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