import React from 'react';

export default class Remove extends React.Component{

	constructor(props){
		super(props);
	}

	removeListItem = ()=>{
		this.props.clickHandler(this.props.color);
	};

	render(){
		return (
			<i className='fa fa-times' onClick={this.removeListItem}></i>
		);
	}
}