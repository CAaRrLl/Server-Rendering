import Home from '../common/Home';
import List from '../common/List';
import { fetchPopularRepos } from './api';

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/popular/:id",
        component: List,
        initData: (path = '') => fetchPopularRepos(
            path.split('/').pop()
        )
    }
];

export default routes;