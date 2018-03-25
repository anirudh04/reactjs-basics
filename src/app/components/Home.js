import React from "react";

export class Home extends React.Component {
	constructor(props)
	{
		super();
		this.state = {
			age: props.Initialage,
			status: 0,
			homeLink: props.initialLinkName
		}; 
		setTimeout(() => {
		this.setState({status:1 });
		},6000);
	}	
	
	onMakeOlder(){
		this.setState({
			age: this.state.age +3
		});
		this.age += 3;
		console.log(this.age);
		}

		onChangeLink(){
			this.props.changeLink(this.state.homeLink);

		}

		onHandleChange(event)
		{
          this.setState({
			  homeLink: event.target.value
		  });
		}

	render() {
		return(
		<div>
			<p>In a new component!</p>
			<p>Your name is {this.props.name} and your age is {this.state.age}</p>
			<p>status: {this.state.status}</p>
			  <hr/>
			   	<button onClick = {() => this.onMakeOlder()} className = "btn btn-primary" >Make me older!</button>
			  <hr/>
			   	<button onClick = {this.props.greet} className = "btn btn-primary" >Greet</button>
			  <hr/>
				<input type = "text" value={this.state.homeLink} 
				                     onChange = {(event) => this.onHandleChange(event)}/>
			   	<button onClick = {this.onChangeLink.bind(this)} className = "btn btn-primary" >Change the link name</button>
		</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	Initialage: React.PropTypes.number,
	greet: React.PropTypes.func,
	initialLinkName: React.PropTypes.string
};
