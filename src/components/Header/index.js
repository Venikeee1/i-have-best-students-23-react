import Container from '../UI/Container';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import paths from '../../router/routesPaths';
import WithLoggedInStatus from '../../hocs/WithLoggedInStatus';
import { logout } from '../../redux/userReducer';
import { connect } from 'react-redux';

const Logo = () => (
  <Link className={styles.link} to={paths.MAIN}>
    <div>Logo</div>
  </Link>
);

const ProfileLink = ({ logout }) => {
  return (
    <div>
      <Link className={styles.link} to={paths.TODO}>
        Profile
      </Link>
      <button onClick={logout}>logout</button>
    </div>
  );
};

const profileMapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

const ProfileLinkWithLogout = connect(
  null,
  profileMapDispatchToProps
)(ProfileLink);

const AuthLinks = () => (
  <div className="">
    <Link className={styles.link} to={paths.LOGIN}>
      Login
    </Link>
    <span> / </span>
    <Link className={styles.link} to={paths.REGISTRATION}>
      Registration
    </Link>
  </div>
);

const Header = ({ isLoggedIn }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />
          {isLoggedIn ? <ProfileLinkWithLogout /> : <AuthLinks />}
        </div>
      </Container>
    </header>
  );
};

export default WithLoggedInStatus(Header);
