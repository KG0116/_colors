import React from 'react';
import PubSub from 'pubsub-js';

export default class AddButton extends React.Component{

	state = {
		color: {colorName: 'Petite Orchid', colorValue: '#DB9690'}
	};

	setSelectedColor = (msg, data)=>{
		this.setState({color: data});
	}

	addSelectedColor = ()=>{
		PubSub.publishSync('COLOR LIST', this.state.color);
	}

	constructor(props){
		super(props);
	}

	componentDidMount() {
		PubSub.subscribe('COLOR UPDATE', this.setSelectedColor);
	}


	render(){
		return (
			<button className='btn btn--add' onClick={this.addSelectedColor}>
				Add to list
			</button>
		);
	}
}