import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';


import App from './components/App';


render(
    (
        <Router className="main">
            <App />
        </Router>
    ),
    document.getElementById('root')
);