/**
 * Created by zhangtingcen on 2017/5/17.
 */

import App from './components/App';
import About from './components/About';
import Info from './components/Info';

const routes = {
    path: '/',
    component: App,
    childRoutes: [
        {path: 'about', component: About},
        {path: 'inbox', component: Info},
    ]
};

export default routes;