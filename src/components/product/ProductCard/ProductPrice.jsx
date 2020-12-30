import React from 'react';
import PropTypes from 'prop-types';
import styles from './productPrice.module.css';

const ProductPrice = ({ currency, value }) => {
  return (
    <div className={styles.price}>
      {currency} {value}
    </div>
  );
};

ProductPrice.defaultProps = {
  currency: 'UAH',
};

ProductPrice.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.number.isRequired,
};

export default ProductPrice;
