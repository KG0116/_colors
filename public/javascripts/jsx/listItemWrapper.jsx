import React from 'react';
import ColorSwatch from './colorSwatch';
import Remove from './remove';

export default class ListItemWrapper  extends React.Component {
    
    state = {
    	showListItem: true
    };

    removeListItem = ()=>{
    	this.setState({showListItem: false});
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<li className='color-list__li'>
        		<ColorSwatch swatchColor={this.props.color} />
        		${this.props.name}: {this.props.color};
        		<Remove clickHandler={this.props.clickHandler} color={this.props.name}/>
        	</li>
        );
    }
}
