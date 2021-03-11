import styles from './AuthCard.module.css';

const AuthCard = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default AuthCard;
