// Startup entry point for the client side application
import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home';
import './client.scss';

ReactDom.render(<Home />, document.querySelector('#root'));
