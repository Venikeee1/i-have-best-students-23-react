import { connect } from 'react-redux';
import { isLoggedIn } from '../redux/selectors';

const withLoggedInStatus = (Component) => {
  const WithAuthComponent = (props) => {
    return <Component {...props} />;
  };

  const mapStateToProps = (state) => ({
    isLoggedIn: isLoggedIn(state),
  });

  return connect(mapStateToProps)(WithAuthComponent);
};

export default withLoggedInStatus;
