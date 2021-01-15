import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

const PrimaryButton = ({ children, className, ...restProps }) => {
  const classList = [className, styles.button].join(' ');

  return (
    <button className={classList} {...restProps}>
      {children}
    </button>
  );
};

PrimaryButton.defaultProps = {
  className: '',
};

PrimaryButton.propTypes = {
  className: PropTypes.string,
};

export default PrimaryButton;
