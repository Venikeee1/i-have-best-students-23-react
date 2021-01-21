import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

const colors = ['success', 'alert', 'warning'];

const colorsMap = {
  default: styles.buttonDefault,
  success: styles.buttonSuccess,
};

const outlinedColorsMap = {
  default: styles.buttonOutlined,
};

const PrimaryButton = ({
  children,
  className,
  color,
  outlined,
  ...restProps
}) => {
  const colorStyle = outlined ? outlinedColorsMap[color] : colorsMap[color];
  const classList = [className, styles.button, colorStyle].join(' ');

  return (
    <button className={classList} {...restProps}>
      {children}
    </button>
  );
};

PrimaryButton.defaultProps = {
  className: '',
  color: 'default',
  outlined: false,
};

PrimaryButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  outlined: PropTypes.bool,
};

export default PrimaryButton;
