import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import withLoggedInStatus from '../hocs/WithLoggedInStatus';
import paths from './routesPaths';

const RouteWithGuard = (props) => {
  const { isLoggedIn, isLoginRequired, logoutRequired, ...restProps } = props;

  if (isLoginRequired) {
    return isLoggedIn ? (
      <Route {...restProps} />
    ) : (
      <Redirect to={paths.LOGIN} />
    );
  }

  if (logoutRequired) {
    return !isLoggedIn ? (
      <Route {...restProps} />
    ) : (
      <Redirect to={paths.MAIN} />
    );
  }

  return <Route {...restProps} />;
};

RouteWithGuard.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.elementType,
  isLoggedIn: PropTypes.bool,
  isLoginRequired: PropTypes.bool,
  logoutRequired: PropTypes.bool,
};

export default withLoggedInStatus(RouteWithGuard);
