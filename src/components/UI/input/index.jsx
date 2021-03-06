import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './Input.module.css';

const Input = (props) => {
  const { name, type, label, className, ...restProps } = props;
  const id = nanoid();
  const classList = [className, styles.inputWrapper].join(' ');

  return (
    <div className={classList}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={styles.input}
        id={id}
        type={type}
        name={name}
        {...restProps}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  name: null,
  label: '',
  className: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
