import React from 'react';
import Header from '../../components/Header';
import SignForm from '../../components/SignForm';
import CreateAccForm from '../../components/CreateAccForm';
import { Box } from '@mui/material';
import { useStyle } from './style';

function Login(props) {
  const classes = useStyle()

  return (
    <>
      <Header />
      <Box className={classes.sign}>
        <SignForm />
        <Box className={classes.signDivide}></Box>
        <CreateAccForm />
      </Box>
    </>
  );
}

export default Login;
