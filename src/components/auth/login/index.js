import React, { Component } from 'react';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import Title from '../../UI/typography/title';
import AuthSection from '../auth-section';
import styles from './Login.module.css';
import { loginUser } from '../../../services/auth.service';
import { paths } from '../../../router/Router';

class Login extends Component {
  state = {
    formData: {
      email: '',
      password: '',
    },
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.props.history.replace(paths.MAIN);

    // try {
    //   await loginUser(this.state.formData);
    // } catch (error) {
    //   console.error(error);
    // }
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
          </form>
        </AuthCard>
      </AuthSection>
    );
  }
}

export default Login;
