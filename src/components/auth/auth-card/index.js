import PropTypes from 'prop-types';
import styles from './AuthCard.module.css';

const AuthCard = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

AuthCard.propTypes = {};

export default AuthCard;
