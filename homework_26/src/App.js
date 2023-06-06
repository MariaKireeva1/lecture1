import React, { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PrivateRoute from './components/hoc/PrivateRoute';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthThunk } from './store/usersAction';
function App(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector(store => store.isAuth)

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('userData'))
    if (storage) {
      dispatch(setIsAuthThunk(true))
    } else {
      dispatch(setIsAuthThunk(false))
    }

    navigate('/main');
  }, []);


  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/main' element={<Main />} />
      <Route path='/cart' element={
        <PrivateRoute isAuth={isAuth}>
          <ShoppingCart />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
