import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../../Rating';
import styles from './ReviewHeader.module.css';

const ReviewHeader = ({ totalRating, amount }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Суммарный рейтинг</h2>
      <div className={styles.rating}>
        <span>{amount} отзывов</span>
        <Rating rating={totalRating} />
      </div>
    </div>
  );
};

ReviewHeader.propTypes = {
  totalRating: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ReviewHeader;
