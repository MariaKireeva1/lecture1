import React, { useState } from 'react';
import Button from '../../common/Button';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { postUserThunk, setIsAuthAction } from '../../store/user/usersAction';
import { useFormik } from 'formik';


const CreateAccForm = () => {
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


  const createAcc = async (values) => {
    if (values.name === '' || values.createEmail === '' || values.createPassword === '' || values.verifyPassword === '') {
        showError('Enter all fields')
        return
    }

    let users = await api.getUsers()
    const existedUser = users.find(item => item.email == values.createEmail);

    if (existedUser) {
        showError(`User with email ${values.createEmail} already exist`)
    } else if (values.createPassword !== values.verifyPassword) {
        showError(`Password does not match`)
    } else {
        const newUser = {
            name: values.name,
            email: values.createEmail,
            password: values.createPassword,
            status: true
        };
        dispatch(postUserThunk(newUser))
        dispatch(setIsAuthAction(true))
        navigate('/main')
    }
}

  const formik = useFormik({
    initialValues: {
      createEmail: '',
      name: '',
      createPassword: '',
      verifyPassword: ''
    },
    onSubmit: createAcc
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant='h2' sx={{ fontSize: '1.5em', fontWeight: 'bold', margin: '20px 0' }}>Quick Registration</Typography>
            <Box className={`error ${errorActive ? 'error-active' : ''}`}>
                {errorMessage}
            </Box>
            <Typography variant='h3' sx={{ fontSize: '1.17em', fontWeight: 'bold', margin: '20px 0' }}>For new customers</Typography>
            <input
        id="name"
        placeholder='Full Name'
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input
        id="createEmail"
        placeholder='Email Address'
        name="createEmail"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.createEmail}
      />
      <input
        id="createPassword"
        name="createPassword"
        type="password"
        placeholder='Password'
        onChange={formik.handleChange}
        value={formik.values.createPassword}
      />
       <input
        id="verifyPassword"
        placeholder='Verify Password'
        name="verifyPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.verifyPassword}
      />
      <Button title='Create Account' action={formik.handleSubmit} type={'submit'} />
    </form>
  );
};

export default CreateAccForm
