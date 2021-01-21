import PropTypes from 'prop-types';
import Input from '../../UI/input';
import Button from '../../UI/buttons/PrimaryButton';
import styles from './ApartmentsFilter.module.css';

const index = ({ handleChange }) => {
  return (
    <div className={styles.apartmentsFilter}>
      <Input placeholder="Цена от" onChange={handleChange} />
      <Button>Подбор жилья</Button>
    </div>
  );
};

index.propTypes = {
  handleChange: PropTypes.func,
};

export default index;
