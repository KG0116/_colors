import React from 'react';
import PubSub from 'pubsub-js';

export default class DownloadButton extends React.Component{	
	constructor(props){
		super(props);
	}

	state = {
		colorList: []
	};

	subscribeToColorList = (msg, data)=>{
		this.setState({colorList: data});
	};

	prepareFile = ()=>{
		if(this.state.colorList.length > 0){
			let file = this.state.colorList.slice();
			
			file = file.map(function(element){
				return '${element.colorName}: {element.colorValue};'.replace(/{([\w\.\(\)]+)}/ig, function(match, p1){
					return eval(p1);
				});
			}).join('\n');
			PubSub.publish('DOWNLOAD LINK', encodeURIComponent(file));
		}
	};

	componentDidMount() {
	     PubSub.subscribe( 'DOWNLOAD BUTTON', this.subscribeToColorList); 
	}

	render(){
		return (
			<button className='btn btn--download' onClick={this.prepareFile}>Download</button>
		);
	}
}