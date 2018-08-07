import React, { Component } from 'react';

class APICall extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  		error: null,
  		isLoaded: false,
  		name: ''
  	};
  }

  componentDidMount() {
  	fetch("https://swapi.co/api/people/?search=")
  	  .then(res => res.json())
  	  .then(
  	  	(result) => {
  	  		this.setState({
  	  			isLoaded: true,
  	  			items: result.results
  	  		});
  	  	},
  	  	(error) => {
  	  		this.setState({
  	  			isLoaded: true,
  	  			error
  	  		});
  	  	}
  	)
  }

  render() {
  		const {error, isLoaded, items } = this.state;
  		if (error) {
  			return <div> Error: {error.message} </div>;
  		} else if (!isLoaded){
  			return <div> Loading... </div>;
  		} else {
  			return (
  				<div>{items}</div>
  			)
  		}
  }
}

export default APICall;