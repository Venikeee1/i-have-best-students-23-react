import styles from './Select.module.css';
import PropTypes from 'prop-types';

const Select = ({
  items,
  className = '',
  defaultValue = '',
  color,
  ...restProps
}) => {
  const classStyles = [styles.select, className].join(' ');

  return (
    <select className={classStyles} {...restProps}>
      {defaultValue && (
        <option value="" key={defaultValue}>
          {defaultValue}
        </option>
      )}
      {items.map((item) => {
        let text, value;
        if (typeof item === 'string') {
          text = item;
          value = item;
        } else {
          text = item.text;
          value = item.value;
        }

        return (
          <option key={value} value={value}>
            {text}
          </option>
        );
      })}
    </select>
  );
};

// items = ['apple', 'dasdas']
// items = [{text: 'dsads', value: ''}]

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string,
      }),
    ])
  ),
  color: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Select;
