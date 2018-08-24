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
				{
					rocket: 'Space Pod',
					units: 2,
					max_distance: '200 megamiles',
					speed: '2 megamiles/hour'
				}, 
				{
					rocket: 'Space Rocket',
					units: 1,
					max_distance: '300 megamiles',
					speed: '4 megamiles/hour'
				},
				{
					rocket: 'Space Shuttle',
					units: 1,
					max_distance: '400 megamiles',
					speed: '5 megamiles/hour'
				},
				{
					rocket: 'Space Ship',
					units: 2,
					max_distance: '600 megamiles',
					speed: '10 megamiles/hour'
				}
			],
			selectedPlanet:'DonLon',
			selectedRocket:'Space Pod',
			calculatedTime: 0
		}
	}
	// selectPlanet = (event) => {
	// 	this.setState({selectedPlanet: event.target.value}, this.calculateTime());
	// }

	// selectRocket = (event) => {
	// 	this.setState({selectedRocket: event.target.value}, this.calculateTime());
	// }

	componentDidMount(){
		this.calculateTime();
	}

	calculateTime = () => {
		let planet = this.state.selectedPlanet;
		let rocket = this.state.selectedRocket;
		let distance = this.state.calculatedTime;
		this.state.planets.map( planetName => {
			if(planetName.planet === planet){
				distance = parseInt(planetName.distance);
			}
		})
		let max_distance;
		this.state.vehicles.map( rocketName => {
			if(rocketName.rocket === rocket){
				max_distance = parseInt(rocketName.max_distance);
			}
		})
		let speed;
		this.state.vehicles.map( rocketName => {
			if(rocketName.rocket === rocket){
				speed = parseInt(rocketName.speed);
			}
		})
		if (max_distance >= distance){
			this.setState({
				calculatedTime: distance/speed
			})
		}
	}
	render() {
		return (<div>
			<select id="planets" onChange={(event) => this.setState({selectedPlanet: event.target.value}, this.calculateTime())}>
				{ this.state.planets.map( planetName => 
					<option key={planetName.planet}>{planetName.planet}</option>
				)}
			</select>
			&nbsp;
			<select id="rockets" onChange={(event) => this.setState({selectedRocket: event.target.value}, this.calculateTime())}>
				{ this.state.vehicles.map( (rocketName, id) => 
					<option key= {id}> {rocketName.rocket} </option>
				)}
			</select>
			<div>
				Planet:  {this.state.selectedPlanet} <br/>
				Rocket: {this.state.selectedRocket} <br/>
				Time Taken: {this.state.calculatedTime}
			</div>
		</div>)
	}
}