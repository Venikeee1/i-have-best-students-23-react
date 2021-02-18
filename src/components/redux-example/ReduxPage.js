import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

const ReduxPage = (props) => {
  const { name, age, changeName, changeAge } = props;
  return (
    <div>
      <h1>
        Redux {name}. Age is {age}
      </h1>
      <input
        value={name}
        onChange={(event) => changeName(event.target.value)}
      />
      <input value={age} onChange={(event) => changeAge(event.target.value)} />
    </div>
  );
};

ReduxPage.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  age: state.user.age,
});

const mapDispatchToProps = (dispatch) => ({
  changeName: (newName) => dispatch(actions.changeName(newName)),
  changeAge: (age) => dispatch(actions.changeAge(age)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);
