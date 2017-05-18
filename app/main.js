import React from 'react';
import {render} from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import App from './components/App';
import About from './components/About';
import Info from './components/Info';

// import route from './routes';


// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
render((
    <Router>
        <div>
            <ul>
                <li><Link to="/app">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/info">Info</Link></li>
            </ul>
            <hr/>
            <Route path="/app" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/info" component={Info}/>
        </div>
    </Router>
), document.getElementById('root'))