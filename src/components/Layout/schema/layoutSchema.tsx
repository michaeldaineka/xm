import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
const Error = lazy(() => import('pages/error'));
const Dashboard = lazy(() => import('pages/dashboard'));
const Company = lazy(() => import('pages/company'));

const schema: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/company/:symbol',
    exact: false,
    component: Company,
  },
  {
    component: Error,
  },
];

export default schema;

export const layoutRoutes = (function () {
  return schema.map((item) => item.path);
})();
