import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import ApartmentsPage from '../pages/Apartment';
import Login from '../components/auth/login';
import Registration from '../components/auth/registration';

export const paths = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  APARTMENT: (id) => `/apartment/${id}`,
};

const Router = () => {
  return (
    <Switch>
      <Route path={paths.MAIN} exact component={Homepage} />
      <Route
        path={paths.LOGIN}
        render={(props) => {
          return <Login {...props} extraPropName="value" />;
        }}
      />
      <Route path={paths.REGISTRATION} component={Registration} />
      <Route path={paths.APARTMENT(':id')} component={ApartmentsPage} />
    </Switch>
  );
};

export default Router;
