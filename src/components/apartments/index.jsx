import PropTypes from 'prop-types';
import Reviews from './Reviews';
import ApartmentsDetails from './details';
import Container from '../UI/Container';
import styles from './Apartment.module.css';

const ApartmentPage = ({ apartment }) => {
  if (!apartment) return null;

  const { rating, title, descr, imgUrl, id, reviews } = apartment;

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <ApartmentsDetails
            className={styles.details}
            id={id}
            rating={rating}
            title={title}
            descr={descr}
            imgUrl={imgUrl}
          />
          {reviews.length !== 0 && (
            <Reviews items={reviews} className={styles.additionalInfo} />
          )}
        </div>
      </Container>
    </div>
  );
};

ApartmentPage.propTypes = {
  apartment: PropTypes.object,
};

export default ApartmentPage;
