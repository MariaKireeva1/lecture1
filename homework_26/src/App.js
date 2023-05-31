import React, { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ShoppingCartContext from './context/ShoppingCartContext'
import PrivateRoute from './components/hoc/PrivateRoute';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
function App(props) {
  const navigate = useNavigate()
  const [cartAmount, setCartAmount] = useState(0)
  const [isAuth, setIsAuth] = useState(null)

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('userData'))
    if (storage) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }

    navigate('/main');
  }, []);


  return (
    <ShoppingCartContext.Provider value={{ cartAmount, setCartAmount, isAuth, setIsAuth }}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/cart' element={
          <PrivateRoute isAuth={isAuth}>
            <ShoppingCart />
          </PrivateRoute>
        } />
      </Routes>
    </ShoppingCartContext.Provider>
  );
}

export default App;
