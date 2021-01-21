import React, { Component } from 'react';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import Title from '../../UI/typography/title';
import AuthSection from '../auth-section';
import styles from './Login.module.css';

class Login extends Component {
  state = {
    formData: {
      login: '',
      password: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.formData);
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
              name="login"
              placeholder="Login"
              autoComplete="username"
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
          </form>
        </AuthCard>
      </AuthSection>
    );
  }
}

export default Login;
