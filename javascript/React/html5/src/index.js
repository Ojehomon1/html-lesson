import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import Nav from './nav.js';
import Footer from './footer.js';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
