import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import SideBar from '../../side-bar';
import styles from './productList.module.css';

const ProductList = ({ items }) => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleApartmentClick = (selectedApartment) => () => {
    setSelectedApartment(selectedApartment);
    setIsOpen(true);
  };

  const handleSideBarClose = () => {
    setIsOpen(false);
  };

  const ApartmentsList = ({ apartments }) => {
    return apartments.map((apartment) => {
      const { id, imgUrl, price, rating, descr } = apartment;

      return (
        <ProductCard
          key={id}
          imgSrc={imgUrl}
          price={price}
          rating={rating}
          description={descr}
          onClick={handleApartmentClick(apartment)}
        />
      );
    });
  };

  return (
    <div className={styles.list}>
      {items.length === 0 ? (
        'ничего не найдено'
      ) : (
        <ApartmentsList apartments={items} />
      )}
      {selectedApartment && isOpen && (
        <SideBar onClose={handleSideBarClose} {...selectedApartment} />
      )}
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
