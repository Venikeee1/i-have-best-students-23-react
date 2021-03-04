import React, { Component } from 'react';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import Title from '../../UI/typography/title';
import AuthSection from '../auth-section';
import { Link } from 'react-router-dom';
import { paths } from '../../../router/Router';
import styles from './Registration.module.css';

class Login extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
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
          <Title className={styles.authStyle}>Регистрация</Title>
          <form onSubmit={this.handleSubmit}>
            <Input
              className={styles.authInput}
              name="name"
              placeholder="Name"
              autoComplete="username"
              onChange={this.handleChange}
            />
            <Input
              className={styles.authInput}
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="user-email"
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
            <Input
              className={styles.authInput}
              name="confirmPassword"
              type="password"
              autoComplete="user-password"
              placeholder="Confirm password"
              onChange={this.handleChange}
            />
            <PrimaryButton className={styles.authButton} type="submit">
              Вход
            </PrimaryButton>
            <Link to={paths.LOGIN}>Логин</Link>
          </form>
        </AuthCard>
      </AuthSection>
    );
  }
}

export default Login;
