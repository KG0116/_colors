import React from 'react';
import PubSub from 'pubsub-js';

export default class ColorWheel extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		let colorWheelDomElement 	= $('#color-wheel');
		let colorAttributes 		= window.ntc.name;
		let initColorWheel 		    = window.$.farbtastic;
		let value   				= '';
		let name  					= '';

		initColorWheel(colorWheelDomElement, function(color){
			value = colorAttributes(color)[0];
			name  = colorAttributes(color)[1];
			PubSub.publishSync( 'COLOR UPDATE', {colorName: name, colorValue: value} );
		});
	}

	render(){
		return (
			<div id='color-wheel'></div>
		);
	}
}
