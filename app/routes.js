/**
 * Created by zhangtingcen on 2017/5/17.
 */


const routes = {
    path: '/',
    component: App,
    childRoutes: [
        {path: 'about', component: About},
        {path: 'inbox', component: Inbox},
    ]
};

export default routes;