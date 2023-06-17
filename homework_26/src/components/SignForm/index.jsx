import React, { useState } from 'react';
import Button from '../../common/Button';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUserAction, setIsAuthAction } from '../../store/user/usersAction';
import { useFormik } from 'formik';

const SignForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [errorActive, setErrorActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (message) => {
    setErrorMessage(message);
    setErrorActive(true);
    setTimeout(() => {
      setErrorActive(false);
    }, 3000);
  };


  const sign = async (values) => {
    if (values.password === '' || values.email === '') {
      showError('Enter both email and password');
      return;
    }

    let users = await api.getUsers();
    const user = users.find(item => item.email === values.email);

    if (!user) {
      showError('Invalid Email')
    } else if (user.password !== values.password) {
      showError('Invalid Password')
    } else {
      user.status = true;
      dispatch(setUserAction(user));
      localStorage.setItem('userId', user.id);
      api.changeStatus(user.id, true);
      dispatch(setIsAuthAction(true));
      navigate('/main');
    }
  };


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: sign
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant='h2' sx={{ fontSize: '1.5em', fontWeight: 'bold', margin: '20px 0' }}>Secure Sign In</Typography>
      <Box className={`error ${errorActive ? 'error-active' : ''}`}>
        {errorMessage}
      </Box>
      <Typography variant='h3' sx={{ fontSize: '1.17em', fontWeight: 'bold', margin: '20px 0' }}>For current customers</Typography>
      <input
        id="email"
        placeholder='Email Address'
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder='Password'
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button title='Sign In' action={formik.handleSubmit} type={'submit'} />
    </form>
  );
};

export default SignForm
