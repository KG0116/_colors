import React from 'react';
import PubSub from 'pubsub-js';

export default class Input extends React.Component{

	publishUpdatedColor(color){
		let pattern = /(#[a-f0-9]{6})/i;
		if(color.match(pattern)){
			let colorAttributes = window.ntc.name;
			let value 			= colorAttributes(color)[0];
			let name 			= colorAttributes(color)[1];
			
			PubSub.publishSync('COLOR UPDATE', {colorName: name, colorValue: value});
		}
	}

	constructor(props){
		super(props);
	}

	updateColorOnBlur = (event)=>{
		let color 	= event.target.value;
		this.publishUpdatedColor(color);
	};

	updateColorOnEnterKey = (event)=>{
		let ENTER   = 13;
		let keyCode = event.keyCode;
		let color   = event.target.value;
		if(keyCode == ENTER){
			this.publishUpdatedColor(color);
		}
	};

	render(){
		return (
			<input type='text' placeholder='#DB9690' onBlur={this.updateColorOnBlur} onKeyDown={this.updateColorOnEnterKey}/>
		);
	}
}