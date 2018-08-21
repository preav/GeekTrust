import React, { Component } from 'react';
export default class Planets extends Component{
	constructor(props) {
		super();
		this.state = {
			planets :[
				{
					planet: 'DonLon',
					distance: '100 megamiles'
				},
				{
					planet: 'Enchai',
					distance: '200 megamiles'
				},
				{
					planet: 'Jebing',
					distance: '300 megamiles'
				},
				{
					planet: 'Sapir',
					distance: '400 megamiles'
				},
				{
					planet: 'Lerbin',
					distance: ' 500 megamiles'
				},
				{
					planet: 'Pingasor',
					distance: '600 megamiles'
				}
			],
			vehicles: [
				'Space Pod': {
					'units': 2,
					'max_distance': '200 megamiles',
					'speed': '2 megamiles/hour'
				}, 
				'Space Rocket': {
					'units': 1,
					'max_distance': '300 megamiles',
					'speed': '4 megamiles/hour'
				},
				'Space Shuttle': {
					'units': 1,
					'max_distance': '400 megamiles',
					'speed': '5 megamiles/hour'
				},
				'Space Ship': {
					'units': 2,
					'max_distance': '600 megamiles',
					'speed': '10 megamiles/hour'
				}
			],
			selectedPlanet:'Bye',
			selectedRocket:[]
		}
	}
	selectPlanet() {
		this.setState({selectedPlanet: document.getElementById('planets').value});
		console.log(this.state.selectedPlanet);
	}
	render() {
		return (<div>
			<select id="planets" onChange={() => this.selectPlanet()}>
				{this.state.planets.map( planetName => 
					<option key={planetName.planet}>{planetName.planet}</option>
				)}
			</select>
			<select id="rockets">
				{this.state.vehicles.map(rocketName => 
					<option key={rocketName}>{rocketName}</option>)}
			</select>
		 </div>)
	}
}