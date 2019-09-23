import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker.js';
//import { render } from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
//import SelectTable from './views/selectTable.jsx';
import HamburgersMenu from './views/hamburgers'



ReactDOM.render(<HamburgersMenu />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import Toolbar from './components/sidebar/toolbar/Toolbar.js';
// ReactDOM.render(<Toolbar />, document.getElementById('root'));

