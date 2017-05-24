import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
		<form>
		<div className="row">
		<div className="column">
		  <h3>Peanuts</h3>
			<input type="checkbox" name="peanuts" value="peanuts"/>Peanuts<br/>
			<input type="checkbox" name="artificial_nuts" value="artificial_nuts"/>Artificial nuts<br/>
			<input type="checkbox" name="beer_nuts" value="beer_nuts"/>Beer nuts<br/>
			<input type="checkbox" name="peanut_oil" value="peanut_oil"/>Peanut oil<br/>
			<input type="checkbox" name="goobers" value="peanuts"/>Goobers<br/>
			<input type="checkbox" name="ground_nuts" value="artificial_nuts"/>Ground nuts<br/>
			<input type="checkbox" name="mandelonas" value="beer_nuts"/>Mandelonas<br/>
			<input type="checkbox" name="mixed_nuts" value="peanut_oil"/>Mixed nuts<br/>
			<input type="checkbox" name="monkey_nuts" value="artificial_nuts"/>Monkey nuts<br/>
			<input type="checkbox" name="nut_meat" value="beer_nuts"/>Nut meat<br/>
			<input type="checkbox" name="nut_pieces" value="peanut_oil"/>Nut pieces<br/>
			<input type="checkbox" name="peanut_butter" value="artificial_nuts"/>Peanut butter<br/>
			<input type="checkbox" name="peanut_flour" value="beer_nuts"/>Peanut flour<br/>
			<input type="checkbox" name="peanut_protein_hydrolysate" value="peanut_oil"/>Peanut protein hydrolysate<br/>
		  <h3>Eggs</h3>
		    <input type="checkbox" name="albumin" value="albumin"/>Albumin<br/>
			<input type="checkbox" name="egg" value="egg"/>Egg (dried, powdered, solids, white, yolk)<br/>
			<input type="checkbox" name="eggnog" value="eggnog"/>Eggnog<br/>
			<input type="checkbox" name="lysozyme" value="lysozyme"/>Lysozyme<br/>
			<input type="checkbox" name="mayonnaise" value="mayonnaise"/>Mayonnaise<br/>
			<input type="checkbox" name="meringue" value="meringue"/>Meringue (meringue powder)<br/>
			<input type="checkbox" name="ovalbumin" value="ovalbumin"/>Ovalbumin<br/>
			<input type="checkbox" name="surimi" value="surimi"/>Surimi<br/>
		</div>
		<div className="column">
		  <h3>Tree nut</h3>
			<input type="checkbox" name="almond" value="almond"/>Almond<br/>
			<input type="checkbox" name="artificial_nuts" value="artificial_nuts"/>Artificial nuts<br/>
			<input type="checkbox" name="brazil_nut" value="brazil_nut"/>Brazil nut<br/>
			<input type="checkbox" name="beechnut" value="beechnut"/>Beechnut<br/>
			<input type="checkbox" name="butternut" value="butternut"/>Butternut<br/>
			<input type="checkbox" name="cashew" value="cashew"/>Cashew<br/>
			<input type="checkbox" name="chestnut" value="chestnut"/>Chestnut<br/>
			<input type="checkbox" name="chinquapin_nut" value="chinquapin_nut"/>Chinquapin nut<br/>
			<input type="checkbox" name="coconut" value="coconut"/>Coconut<br/>
			<input type="checkbox" name="gianduja" value="gianduja"/>Gianduja<br/>
			<input type="checkbox" name="ginkgo_nut" value="ginkgo_nut"/>Ginkgo nut<br/>
			<input type="checkbox" name="hazelnut" value="hazelnut"/>Hazelnut<br/>
			<input type="checkbox" name="hyckory_nut" value="hyckory_nut"/>Hickory nut<br/>
			<input type="checkbox" name="lychee_nut" value="lychee_nut"/>Litchi/lichee/lychee nut<br/>
			<input type="checkbox" name="macadamia_nut" value="macadamia_nut"/>Macadamia nut<br/>
			<input type="checkbox" name="marzipan/almond_paste" value="almond_paste"/>Marzipan/Almond paste<br/>
			<input type="checkbox" name="nangai_nut" value="nangai_nut"/>Nangai nut<br/>
			<input type="checkbox" name="natural_nut_extract" value="natural_nut_extract"/>Natural nut extract<br/>
			<input type="checkbox" name="nut_butters" value="nut_butters"/>Nut butters<br/>
			<input type="checkbox" name="nut_meal" value="nut_meal"/>Nut meal<br/>
			<input type="checkbox" name="nut_meat" value="nut_meat"/>Nut meat<br/>
			<input type="checkbox" name="nut_milk" value="nut_milk"/>Nut milk<br/>
			<input type="checkbox" name="nut_paste" value="nut_paste"/>Nut paste<br/>
			<input type="checkbox" name="nut_pieces" value="nut_pieces"/>Nut pieces<br/>
			<input type="checkbox" name="pecan" value="pecan"/>Pecan<br/>
			<input type="checkbox" name="pesto" value="pesto"/>Pesto<br/>
			<input type="checkbox" name="pili_nut" value="pili_nut"/>Pili nut<br/>
			<input type="checkbox" name="pine_nut" value="pine_nut"/>Pine nut<br/>
			<input type="checkbox" name="pistachio" value="pistachio"/>Pistachio<br/>
			<input type="checkbox" name="praline" value="praline"/>Praline<br/>
			<input type="checkbox" name="shea_nut" value="shea_nut"/>Shea nut<br/>
			<input type="checkbox" name="walnut" value="walnut"/>Walnut<br/>
		</div>

		</div>
		<button className="savePreferences">Save</button>
		</form>
      </div>
    );
  }
}

export default Profile;