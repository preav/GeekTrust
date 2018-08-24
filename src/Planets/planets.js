import React, { Component } from 'react';
import DisplayData from './displayData';

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
			selectedPlanet:[],
			selectedRocket:[],
			calculatedTime:[]
		}
	}

	selectPlanet = (event) => {
		this.setState({selectedPlanet: [...this.state.selectedPlanet, event.target.value]}, this.calculateTime());
	}

	selectRocket = (event) => {
		var selectedRocket = this.state.selectedRocket;
		this.setState({selectedRocket: [event.target.value]}, this.calculateTime());
	}

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
				calculatedTime: [...this.state.calculatedTime, distance/speed]
			})
		}
	}

	render() {
		return (<div> 
			<DisplayData 
				selectPlanet={this.selectPlanet} 
				selectRocket={this.selectRocket} 
				planets={this.state.planets}
				vehicles={this.state.vehicles}
			/>
			<div>
				Planet:  {this.state.selectedPlanet} <br/>
				Rocket: {this.state.selectedRocket} <br/>
				Time Taken: {this.state.calculatedTime}
			</div>	
			</div>)
	}
}