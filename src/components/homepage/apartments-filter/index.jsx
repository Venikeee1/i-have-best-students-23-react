import PropTypes from 'prop-types';
import Input from '../../UI/input';
import Button from '../../UI/buttons/PrimaryButton';
import Select from '../../UI/select';
import styles from './ApartmentsFilter.module.css';

const ApartmentsFilter = ({ handleChange, handleCityChange, cities }) => {
  return (
    <div className={styles.apartmentsFilter}>
      <div className={styles.apartmentsActions}>
        <Select
          defaultValue="Все квартиры"
          onChange={handleCityChange}
          className={styles.apartmentsSelect}
          items={cities}
        />
        <Input
          className={styles.apartmentsInput}
          placeholder="Цена от"
          onChange={handleChange}
        />
      </div>
      <Button>Подбор жилья</Button>
    </div>
  );
};

ApartmentsFilter.propTypes = {
  handleChange: PropTypes.func,
  handleCityChange: PropTypes.func,
  cities: PropTypes.arrayOf(PropTypes.string),
};

export default ApartmentsFilter;
