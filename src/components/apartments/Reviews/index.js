import { Component } from 'react';
import ReviewList from './ReviewList';
import mockedReviews from './reviews.json';
import ReviewHeader from './ReviewHeader';
import styles from './Reviews.module.css';

const totalRating = mockedReviews.reduce(
  (totalRating, review) => totalRating + review.rating,
  0
);
const averageRating = +(totalRating / mockedReviews.length).toFixed(1);

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
    if (this.state.showAll) {
      return mockedReviews;
    }

    return mockedReviews.slice(0, this.state.reviewsLimit);
  };

  render() {
    return (
      <div className={styles.reviews}>
        <ReviewHeader
          totalRating={averageRating}
          amount={mockedReviews.length}
        />
        <ReviewList reviews={this.getCurrentReview()} />
        <button onClick={this.toggleReviews} className={styles.showMore}>
          Читать еще...
        </button>
      </div>
    );
  }
}

Reviews.propTypes = {};

export default Reviews;
