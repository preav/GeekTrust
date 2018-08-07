import React, { Component } from 'react';
//import APICall from './APICall';
// this project is for Xebia
class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			username  : '',
			password : '',
			isLoaded : false,
			items : [],
			error : null,
			count : 0,
			tryLogging : false
		}
	}

	handleClick(event) {
		var apiBaseURL = "https://swapi.co/api/people/";
		var searchUser = "Luke";
		//this.state.username;
		this.setState({ tryLogging : !this.state.tryLogging});

		fetch(apiBaseURL)
	  	    .then(res => res.json())
	  	    .then(
	  	  	(result) => {
	  	  		
	  	  		this.setState({
	  	  			isLoaded: true,
	  	  			items: result.results,
	  	  			count: result.count,
	  	  		}); 
	  	  	},
	  	  	(error) => {
	  	  		this.setState({
	  	  			isLoaded: true,
	  	  			error
	  	  		});
	  	  	}
	  	)
	  	    if (this.state.isLoaded  && this.state.items.find((elem) => elem.name === "Luke Skywalker")) {
	  	    	console.log('found');
	  	    }
	  	    else {
	  	    	console.log("not found")
	  	    }
  	}
	render(){
		const {error, isLoaded, items, tryLogging, count } = this.state;
		if (!isLoaded) {
			return(
				<form className='loginContainer'>
					<input id='username' className='login' type='text' placeholder='Username' 
					onChange = {(event) => this.setState({username : event.target.value})}/><br/>
					<input id='password' className='login' type='password' placeholder='Password'
					onChange = {(event) => this.setState({password : event.target.value})}/><br/>
					<input id='submit' className='login' type='submit' onClick = {(event) => this.handleClick(event)} value='Log In'/>
				</form>
		)} else {
			console.log(items);
			if (error) {
  				return <div> Error: {error.message} </div>;
  			} else {
  				return (
  				<div>{count}</div>
  				)
  			}
		}
	}
}

export default Login;