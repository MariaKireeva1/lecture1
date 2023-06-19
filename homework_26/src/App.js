import React, { useEffect } from 'react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PrivateRoute from './common/hoc/PrivateRoute';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { getUserThunk, setIsAuthAction } from './store/user/usersAction';
import UserProfile from './pages/UserProfile/UserProfile';
function App(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector(store => store.user.isAuth)

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem('userId'))

    if (userId) {
      dispatch(setIsAuthAction(true))
      dispatch(getUserThunk(userId))
    } else {
      dispatch(setIsAuthAction(false))
    }

    navigate('/main');
  }, []);


  return (
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={
        <PrivateRoute isAuth={isAuth}>
          <UserProfile />
        </PrivateRoute>
      } />
      <Route path='/cart' element={
        <PrivateRoute isAuth={isAuth}>
          <ShoppingCart />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
