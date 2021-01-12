import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews = [] }) => {
  return reviews.length > 0
    ? reviews.map(({ rating, author, content, id }) => (
        <ReviewItem
          key={id}
          rating={rating}
          description={content}
          title={author}
        />
      ))
    : 'нет отзывов';
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      content: PropTypes.string,
      author: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default ReviewList;
