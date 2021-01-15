import styles from './AuthSection.module.css';

const AuthSection = ({ children, as = 'section' }) => {
  const TagName = as;

  return <TagName className={styles.section}>{children}</TagName>;
};

AuthSection.propTypes = {};

export default AuthSection;
