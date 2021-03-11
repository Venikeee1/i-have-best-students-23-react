import PropTypes from 'prop-types';
import Rating from '../../Rating';
import MainTitle from '../../UI/typography/title';
import Button from '../../UI/buttons/PrimaryButton';
import styles from '../Apartment.module.css';
import { requestApartmentsOrder } from '../../../services/order.service';

const index = ({ rating, title, descr = '', imgUrl, className = '', id }) => {
  const handleOrderApartment = async () => {
    try {
      await requestApartmentsOrder(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={className}>
      <div className={styles.heading}>
        <MainTitle>{title}</MainTitle>
        <Rating rating={rating} />
      </div>
      <img className={styles.photo} src={imgUrl} alt="" />
      <p>{descr}</p>
      <div className={styles.buttonContainer}>
        <Button onClick={handleOrderApartment}>Забронировать</Button>
      </div>
    </section>
  );
};

index.propTypes = {
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
};

export default index;
