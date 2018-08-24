import React, { Component } from 'react';

export default class DisplayData extends Component{
	render(){
		return (<div>
			{/*<label htmlFor="planet1"> Destination </label>*/}
			<select id="planet1" onChange={this.props.selectPlanet}>
				{ this.props.planets.map( planetName => 
					<option key={planetName.planet}>{planetName.planet}</option>
				)}
			</select>
			<form id="rockets" >
				{this.props.vehicles.map( (rocketName, id) => 
					<label key={id}>
					<input type="radio" key= {id} name="rockets"
					value={rocketName.rocket} onChange={this.props.selectRocket}/> {rocketName.rocket}
					<br/>
					</label>
				)}
			</form>
		</div>
		)
	}
}