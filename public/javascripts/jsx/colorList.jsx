import React from 'react';
import ListItemWrapper from './listItemWrapper';
import PubSub from 'pubsub-js';
import slug from 'slug';

export default class ColorList extends React.Component {
    state = {
    	colorList: [{colorName: 'petite-orchid', colorValue: '#DB9690'}], 
    	colorNamesIndex: ['petite-orchid']
    };

    addColorToList = (msg, data)=>{
    	let colorNamesIndexCopy = this.state.colorNamesIndex.slice();
    	let colorListCopy 		= this.state.colorList.slice();
    	data.colorName 			= slug(data.colorName.toLowerCase());

    	if(colorNamesIndexCopy.indexOf(data.colorName) < 0 && colorListCopy.length < 200){
    		colorListCopy.push(data);
    		colorNamesIndexCopy.push(data.colorName);
    		this.setState({colorList: colorListCopy, colorNamesIndex: colorNamesIndexCopy});
    		PubSub.publishSync('DOWNLOAD BUTTON', colorListCopy);
    	}
    };

    removeItem = (color)=>{
    	let updatedList =  this.state.colorList.filter(function(listItem){
    			if(listItem.colorName === color) 
    				return false;
    			else
    				return true;
    	});
    	this.setState({colorList: updatedList});
    };

    componentDidMount() {
   		PubSub.subscribe( 'COLOR LIST', this.addColorToList );
    }

    render() {
    	let cb = this.removeItem;
        return (
        	<ul className='color-list__ul'>
        		{this.state.colorList.map(function(colorListItem, index) {
           			return <ListItemWrapper name={colorListItem.colorName} color={colorListItem.colorValue} key={index} clickHandler={cb}/>
        		})}
        	</ul>
        );
    }
}