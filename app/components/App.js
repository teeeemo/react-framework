/**
 * Created by zhangtingcen on 2017/5/18.
 */
import React from 'react';

import Info from './Info';
import About from './About';

import {Router,Route, Link} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/app/about" replace={true}>About</Link></li>
                    <li><Link to="/app/info">Info</Link></li>
                </ul>
                <hr/>
                <div>
                    <Route path="/app/info" component={Info}/>
                    <Route path="/app/about" component={About}/>
                </div>
            </div>
        )
    }
}

export default App;