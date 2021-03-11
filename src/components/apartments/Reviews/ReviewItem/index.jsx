import PropTypes from 'prop-types';
import Rating from '../../../Rating';
import styles from './reviewItem.module.css';
import ReviewAvatar from './ReviewAvatar';

const ReviewItem = ({ rating, title, description = '' }) => {
  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <ReviewAvatar />
        <div className={styles.details}>
          <h2 className={styles.title}>{title}</h2>
          {!!rating && <Rating rating={rating} />}
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

ReviewItem.defaultProps = {
  rating: 0,
};

ReviewItem.propTypes = {
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ReviewItem;
