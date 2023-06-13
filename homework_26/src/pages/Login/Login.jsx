import React from 'react';
import Header from '../../components/Header';
import SignForm from '../../components/SignForm';
import CreateAccForm from '../../components/CreateAccForm';
import { Box } from '@mui/material';
import './style.sass'
function Login(props) {
  return (
    <>
      <Header />
      <Box className='sign'>
        <SignForm />
        <Box className='sign__divide'></Box>
        <CreateAccForm />
      </Box>
    </>
  );
}

export default Login;
