import React, { useState } from 'react';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import Title from '../../UI/typography/title';
import AuthSection from '../auth-section';
import { Link } from 'react-router-dom';
import paths from '../../../router/routesPaths';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/userReducer';
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';
import styles from './Registration.module.css';

const Registration = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast('password do not match', { type: 'error' });
      return;
    }

    try {
      const result = await dispatch(registerUser({ name, email, password }));
      unwrapResult(result);
    } catch (error) {
      toast(error.message, { type: 'error' });
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <AuthSection as="article">
      <AuthCard>
        <Title className={styles.authStyle}>Регистрация</Title>
        <form onSubmit={handleSubmit}>
          <Input
            className={styles.authInput}
            name="name"
            placeholder="Name"
            autoComplete="username"
            onChange={handleChange}
          />
          <Input
            className={styles.authInput}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="user-email"
            onChange={handleChange}
          />
          <Input
            className={styles.authInput}
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            type="password"
            onChange={handleChange}
          />
          <Input
            className={styles.authInput}
            name="confirmPassword"
            type="password"
            autoComplete="user-password"
            placeholder="Confirm password"
            onChange={handleChange}
          />
          <PrimaryButton className={styles.authButton} type="submit">
            Вход
          </PrimaryButton>
          <Link to={paths.LOGIN}>Логин</Link>
        </form>
      </AuthCard>
    </AuthSection>
  );
};

export default Registration;
