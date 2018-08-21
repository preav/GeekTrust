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
			selectedPlanet:'DonLon',
			selectedRocket:'Space Pod',
			calculatedTime: 0
		}
	}
	selectPlanet = (event) => {
		this.setState({selectedPlanet: event.target.value});
		this.calculateTime();
	}

	selectRocket = (event) => {
		this.setState({selectedRocket: event.target.value});
		this.calculateTime();
	}

	calculateTime = () => {
		console.log('called')
		let planet = this.state.selectedPlanet;
		let rocket = this.state.selectedRocket;
		let distanceBetweenPlanets = this.state.planets.map( planetName => {if(planetName === planet){
					return planetName.distance;
				}})
		let max_distance = this.state.vehicles.map( rocketName => {if(rocketName === rocket){
					return rocketName.max_distance;
				}})
		let speed = this.state.vehicles.map( rocketName => {if(rocketName === rocket){
					return rocketName.speed;
				}})
		if (max_distance>=distanceBetweenPlanets){
			let timeTaken = distanceBetweenPlanets/speed;
			this.setState = ({
				calculatedTime: timeTaken
			})
		}
	}
	render() {
		return (<div>
			<select id="planets" onClick={this.selectPlanet}>
				{this.state.planets.map( planetName => 
					<option key={planetName.planet}>{planetName.planet}</option>
				)}
			</select>
			&nbsp;
			<select id="rockets" onClick={this.selectRocket}>
				{this.state.vehicles.map(rocketName => 
					<option key={rocketName}>{rocketName}</option>)}
			</select>
			<div>
				Planet:  {this.state.selectedPlanet} <br/>
				Rocket: {this.state.selectedRocket} <br/>
				Time Taken: {this.state.calculatedTime}
			</div>
		</div>)
	}
}