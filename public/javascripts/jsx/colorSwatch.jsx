import React from 'react';
import PubSub from 'pubsub-js';

export default class ColorSwatch extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className='swatch' style={{backgroundColor:this.props.swatchColor}}></div>
		);
	}
}