/**
 * Created by zhangtingcen on 2017/5/18.
 */

import React from 'react';

import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

import HeadNav from './header/HeadNav';

import Index from './index/Index';
import Info from './info/Info';
import About from './about/About';
import Fruit from './fruit/Fruit';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>lalala</h1>
                <div className="header">
                    <HeadNav />
                    <ul>
                        <li><NavLink to='index' activeClassName="selected" activeStyle={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}>index</NavLink></li>
                        <li><NavLink to='info' activeClassName="selected" activeStyle={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}>info</NavLink></li>
                        <li><NavLink to='about' activeClassName="selected" activeStyle={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}>about</NavLink></li>
                        <li><NavLink to='fruit' activeClassName="selected" activeStyle={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}>fruit</NavLink></li>
                    </ul>
                </div>
                <Switch className="body">
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/index" component={Index}/>
                    <Route exact path="/info" component={Info}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/fruit" component={Fruit}/>
                </Switch>
            </div>
        )
    }
}
export default App;