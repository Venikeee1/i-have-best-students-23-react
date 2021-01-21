import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../Rating';
import Price from './ProductPrice';
import styles from './productCard.module.css';

const ProductCard = ({ imgSrc, price, rating, description }) => {
  const hasHighRating = rating >= 4;

  return (
    <section className={styles.card}>
      <div className={styles.cardInner}>
        <img className={styles.photo} src={imgSrc} alt="фото апартаментов" />
        <div className={styles.content}>
          {hasHighRating && 'Топ продаж'}
          <p className={styles.description}>{description}</p>
          <Rating rating={rating} foo />
          <Price value={price} />
        </div>
      </div>
    </section>
  );
};

ProductCard.defaultProps = {
  imgSrc:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
      ullam labore veritatis voluptates, tempore nobis perspiciatis cum in
      odit beatae atque incidunt, sequi facere fuga maiores possimus, eveniet
      obcaecati voluptatem!`,
};

ProductCard.propTypes = {
  imgSrc: PropTypes.string,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default React.memo(ProductCard);
