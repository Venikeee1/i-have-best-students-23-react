import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import asyncComponent from '../components/async-loader';
import RouteWithGuard from './RouteWithGuard';
import paths from './routesPaths';

const Registration = asyncComponent({
  loader: () => import('../components/auth/registration'),
});

const Login = asyncComponent({
  loader: () => import('../components/auth/login'),
});

const Homepage = asyncComponent({
  loader: () => import('../pages/Homepage'),
});

const TodoPage = asyncComponent({
  loader: () => import('../pages/TodoPage'),
});

const ApartmentsPage = lazy(() => import('../pages/Apartment'));

const routes = [
  {
    path: paths.MAIN,
    component: Homepage,
    exact: true,
    isLoginRequired: true,
  },
  {
    path: paths.LOGIN,
    component: Login,
    logoutRequired: true,
  },
  {
    path: paths.REGISTRATION,
    component: Registration,
    logoutRequired: true,
  },
  {
    path: paths.APARTMENT(':id'),
    component: ApartmentsPage,
    isLoginRequired: true,
  },
  {
    path: paths.TODO,
    component: TodoPage,
  },
];

const Router = () => {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Switch>
        {routes.map((route) => (
          <RouteWithGuard
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
            isLoginRequired={route.isLoginRequired}
            logoutRequired={route.logoutRequired}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Router;
