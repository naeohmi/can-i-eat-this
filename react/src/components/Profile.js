import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
       <h2>User Preferences</h2>
       <p>Please, select the allergens that you would like to avoid.</p>
		<form>
		<div className="row">
		<div className="column">
		  <h3><input type="checkbox" name="peanuts" value="peanuts"/>Peanuts</h3>
		  	<h6>
		    Artificial nuts<br/>
		    Beer nuts<br/>
		    Ground nuts<br/>
		    Mandelonas<br/>
		    Mixed nuts<br/>
		    Monkey nuts<br/>
		    Nut meat<br/>
		    Nut pieces<br/>
		    Peanut butter<br/>
			Peanut flour<br/>
			Peanut oil<br/>
			</h6>
		  <h3><input type="checkbox" name="treenuts" value="treenuts"/>Tree nuts</h3>
		    <h6>
			Almond<br/>
			Artificial nuts<br/>
			Almond paste<br/>
			Brazil nut<br/>
			Beechnut<br/>
			Butternut<br/>
			Cashew<br/>
			Chestnut<br/>
			Chinquapin nut<br/>
			Coconut<br/>
			Gianduja<br/>
			Ginkgo nut<br/>
			Hazelnut<br/>
			Hickory nut<br/>
			Lychee nut<br/>
			Macadamia nut<br/>
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
		  <h3><input type="checkbox" name="shellfish" value="shellfish"/>Shell Fish</h3>
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
		  <h3><input type="checkbox" name="fish" value="fish"/>Fish</h3>
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
		  <h3><input type="checkbox" name="wheat" value="wheat"/>Sesame</h3>
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
		  <h3><input type="checkbox" name="wheat" value="wheat"/>Wheat</h3>
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
		<div className="column">
		  <h3><input type="checkbox" name="egg" value="egg"/>Egg</h3>
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
	      <h3><input type="checkbox" name="milk" value="milk"/>Milk</h3>
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
		  <h3><input type="checkbox" name="soy" value="soy"/>Soy</h3>
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
		</div>
		</div>
		<button className="savePreferences">Save</button>
		</form>
      </div>
    );
  }
}

export default Profile;