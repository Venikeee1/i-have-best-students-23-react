import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../components/async-loader';

const Registration = asyncComponent({
  loader: () => import('../components/auth/registration'),
});

const Login = asyncComponent({
  loader: () => import('../components/auth/login'),
});

const Homepage = asyncComponent({
  loader: () => import('../pages/Homepage'),
});

const ApartmentsPage = lazy(() => import('../pages/Apartment'));

export const paths = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  APARTMENT: (id) => `/apartment/${id}`,
};

const routes = [
  {
    path: paths.MAIN,
    component: Homepage,
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
];

const Router = () => {
  return (
    <Switch>
      <Suspense fallback={<h1>loading...</h1>}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Suspense>
    </Switch>
  );
};

export default Router;
