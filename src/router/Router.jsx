import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../components/async-loader';
import ReduxPage from '../components/redux-example/ReduxPage';

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

export const paths = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  APARTMENT: (id) => `/apartment/${id}`,
  TODO: `/todo`,
};

const routes = [
  {
    path: paths.MAIN,
    component: Homepage,
    exact: true,
  },
  {
    path: '/redux',
    component: ReduxPage,
    exact: true,
  },
  {
    path: paths.LOGIN,
    component: Login,
  },
  {
    path: paths.REGISTRATION,
    component: Registration,
  },
  {
    path: paths.APARTMENT(':id'),
    component: ApartmentsPage,
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
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Router;
