import { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewList from './ReviewList';
import ReviewHeader from './ReviewHeader';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    showAll: false,
    reviewsLimit: 2,
  };

  toggleReviews = () => {
    this.setState((prevState) => ({
      showAll: !prevState.showAll,
    }));
  };

  getCurrentReview = () => {
    const { items } = this.props;

    if (this.state.showAll) {
      return items;
    }

    return items.slice(0, this.state.reviewsLimit);
  };

  render() {
    const { items, className } = this.props;
    const classList = [styles.reviews, className].join(' ');

    const totalRating = items.reduce((totalRating, review) => {
      if (review.rating) {
        return totalRating + review.rating;
      }

      return totalRating;
    }, 0);
    const averageRating = +(totalRating / items.length).toFixed(1);

    return (
      <div className={classList}>
        <ReviewHeader totalRating={averageRating} amount={items.length} />
        <ReviewList reviews={this.getCurrentReview()} />
        <button onClick={this.toggleReviews} className={styles.showMore}>
          Читать еще...
        </button>
      </div>
    );
  }
}

Reviews.defaultProps = {
  items: [],
};

Reviews.propTypes = {
  items: PropTypes.array,
};

export default Reviews;
