import React from 'react';
import loadable from '@loadable/component';

const About = loadable(() => import('./screens/about'), {
  fallback: <div>Loading...</div>,
});
const Home = loadable(() => import('./screens/home'), {
  fallback: <div>Loading...</div>,
});
const Users = loadable(() => import('./screens/users'), {
  fallback: <div>Loading...</div>,
});

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/users',
    component: Users,
    isPrivate: true,
  },
];

export default routes;
