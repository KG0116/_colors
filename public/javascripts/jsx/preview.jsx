import React from 'react';
import PubSub from 'pubsub-js';

export default class Preview extends React.Component{

	state = {
		color: {colorName: 'Petite Orchid', colorValue: '#DB9690'}
	};

	constructor(props){
		super(props);
	}

	addSelectedColor = (msg, data)=>{
		this.setState({color: data});
	};

	componentDidMount() {
		PubSub.subscribe('COLOR UPDATE', this.addSelectedColor);     
	}

	render(){
		return (
			<div>
				<span className='color-info'>(Approx.) {this.state.color.colorName}: {this.state.color.colorValue}</span>
				<div className='color-preview' style={{backgroundColor:this.state.color.colorValue}}>
				</div>
			</div>
		);
	}
}