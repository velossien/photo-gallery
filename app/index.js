import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./styles/scss/style.scss');
import routes from './config/Routes.jsx';

if (process.env.NODE_ENV !== "production") {
    console.log('Looks like we are in development mode!');
};

ReactDOM.render(routes, document.getElementById('app'));