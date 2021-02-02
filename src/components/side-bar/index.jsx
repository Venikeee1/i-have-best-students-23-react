import PropTypes from 'prop-types';
import MainTitle from '../UI/typography/title';
import Rating from '../Rating';
import styles from './SideBar.module.css';

const index = ({ title, rating, descr, imgUrl, price, onClose }) => {
  return (
    <div className={styles.sideBar}>
      <button onClick={onClose}>close</button>
      <img className={styles.photo} src={imgUrl} alt="apartment overview" />
      <MainTitle>{title}</MainTitle>
      <div className={styles.info}>
        <span>{price}</span>
        <Rating rating={rating} />
      </div>
      <p>{descr}</p>
    </div>
  );
};

index.propTypes = {};

export default index;
