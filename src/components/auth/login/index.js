import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import Title from '../../UI/typography/title';
import AuthSection from '../auth-section';
import styles from './Login.module.css';
import { paths } from '../../../router/Router';
/*
Метод без редакс тулкита
import { getSessionOperation as loginUser } from '../../../redux/storeWithoutReduxToolkit/operations';
*/
import { loginUser } from '../../../redux/userReducer';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    formData: {
      email: '',
      password: '',
    },
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { getSessionOperation } = this.props;

    try {
      await getSessionOperation(this.state.formData);
      this.props.history.replace(paths.MAIN);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState((prevState) => {
      return {
        formData: {
          ...prevState.formData,
          [name]: value,
        },
      };
    });
  };

  render() {
    return (
      <AuthSection as="article">
        <AuthCard>
          <Title className={styles.authStyle}>Логин</Title>
          <form onSubmit={this.handleSubmit}>
            <Input
              className={styles.authInput}
              name="email"
              placeholder="Email"
              autoComplete="email"
              onChange={this.handleChange}
            />
            <Input
              className={styles.authInput}
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              type="password"
              onChange={this.handleChange}
            />
            <PrimaryButton className={styles.authButton} type="submit">
              Вход
            </PrimaryButton>
            <Link to={paths.REGISTRATION}>Регистрация</Link>
          </form>
        </AuthCard>
      </AuthSection>
    );
  }
}

const mapDispatchToProps = {
  getSessionOperation: (payload) => (dispatch) => dispatch(loginUser(payload)),
};

export default connect(null, mapDispatchToProps)(Login);
