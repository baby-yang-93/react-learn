import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import  "react-app-polyfill/ie11";
import 'core-js/es6/map'
import 'core-js/es6/set'

// import  "react-app-polufill/stable";
// Object.setPrototypeOf = require('setprototypeof')

ReactDOM.render(<Router >
    <App />
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();