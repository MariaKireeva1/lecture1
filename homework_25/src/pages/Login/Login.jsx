import React from 'react';
import Header from '../../components/Header';
import SignForm from '../../components/SignForm';
import CreateAccForm from '../../components/CreateAccForm';

function Login(props) {
  return (
    <div>
        <Header />
      <div className='sign'>
      <SignForm />
      <div className='sign__divide'></div>
      <CreateAccForm/>
      </div>
    </div>
  );
}

export default Login;
