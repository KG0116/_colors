import React from 'react';
import PubSub from 'pubsub-js';

export default class DownloadLink extends React.Component{
    constructor(props) {
        super(props);
    }

    state = {
    	queryString: ''
    }

    downloadFile = (msg, data)=>{
    	this.setState({queryString: data});
    	this.refs.downloadLink.click();
    }

    componentDidMount() {
    	PubSub.subscribe('DOWNLOAD LINK', this.downloadFile); 
    }

    render() {
    	let linkStyle = {display: 'none'}
        return(
        	<a href={this.props.domain + '?file=' + this.state.queryString} target='_self' style={linkStyle} ref='downloadLink'></a>
        );
    }
}
