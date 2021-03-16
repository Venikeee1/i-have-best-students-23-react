import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { loginUser } from '../../../redux/userReducer';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import Title from '../../UI/typography/title';
import AuthSection from '../auth-section';
import styles from './Login.module.css';
import paths from '../../../router/routesPaths';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await dispatch(loginUser(formData));
      unwrapResult(result);
      history.replace(paths.MAIN);
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
        <Title className={styles.authStyle}>Логин</Title>
        <form onSubmit={handleSubmit}>
          <Input
            className={styles.authInput}
            name="email"
            placeholder="Email"
            autoComplete="email"
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
          <PrimaryButton className={styles.authButton} type="submit">
            Вход
          </PrimaryButton>
          <Link to={paths.REGISTRATION}>Регистрация</Link>
        </form>
      </AuthCard>
    </AuthSection>
  );
};

export default Login;

// class Login extends Component {
//   state = {
//     formData: {
//       email: '',
//       password: '',
//     },
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const { loginUser } = this.props;

//     try {
//       const result = await loginUser(this.state.formData);
//       unwrapResult(result);
//       this.props.history.replace(paths.MAIN);
//     } catch (error) {
//       toast(error.message, { type: 'error' });
//     }
//   };

//   handleChange = (event) => {
//     const { value, name } = event.target;

//     this.setState((prevState) => {
//       return {
//         formData: {
//           ...prevState.formData,
//           [name]: value,
//         },
//       };
//     });
//   };

//   render() {
//     return (
//       <AuthSection as="article">
//         <AuthCard>
//           <Title className={styles.authStyle}>Логин</Title>
//           <form onSubmit={this.handleSubmit}>
//             <Input
//               className={styles.authInput}
//               name="email"
//               placeholder="Email"
//               autoComplete="email"
//               onChange={this.handleChange}
//             />
//             <Input
//               className={styles.authInput}
//               name="password"
//               placeholder="Password"
//               autoComplete="new-password"
//               type="password"
//               onChange={this.handleChange}
//             />
//             <PrimaryButton className={styles.authButton} type="submit">
//               Вход
//             </PrimaryButton>
//             <Link to={paths.REGISTRATION}>Регистрация</Link>
//           </form>
//         </AuthCard>
//       </AuthSection>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   loginUser: (payload) => dispatch(loginUser(payload)),
// });
