import React from 'react';
import Preview from './preview.jsx';
import AddButton from './addButton.jsx';
import Input from './input.jsx';

export default class ColorInput extends React.Component{
	constructor(props){
		super(props);
	}
 	render(){
 		return	(
 			<div className=''>
 				<Preview/>
 				<Input/>
 				<AddButton/>
 			</div>
 		);
 	}
}