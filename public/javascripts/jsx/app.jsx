import React from 'react';
import ReactDOM from 'react-dom';
import ColorList from './colorList.jsx';
import ColorWheel from './colorWheel.jsx';
import ColorInput from './colorInput.jsx';
import DownloadButton from './downloadButton.jsx';
import DownloadLink from './downloadLink.jsx';
import PubSub from 'pubsub-js';

ReactDOM.render(<DownloadButton/>, document.querySelector('.header__btn'));
ReactDOM.render(<ColorInput/>, document.querySelector('.color-input'));
ReactDOM.render(<ColorWheel/>, document.querySelector('.color-wheel'));
ReactDOM.render(<ColorList/>, document.querySelector('.color-list'));
ReactDOM.render(<DownloadLink domain='/download'/>, document.querySelector('.header__link'));