import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import styles from './productList.module.css';
import { paths } from '../../../router/Router';

const ProductList = ({ items }) => {
  return (
    <div className={styles.list}>
      {items.length === 0
        ? 'ничего не найдено'
        : items.map(({ id, imgUrl, price, rating, descr }) => (
            <ProductCard
              key={id}
              imgSrc={imgUrl}
              price={price}
              rating={rating}
              description={descr}
              link={paths.APARTMENT(id)}
            />
          ))}
    </div>
  );
};

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imgSrc: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
      description: PropTypes.string,
    })
  ),
};

export default ProductList;
