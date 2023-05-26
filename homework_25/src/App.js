import React, {useState, useEffect} from 'react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ShoppingCartContext from './context/ShoppingCartContext'
function App(props) {
    const navigate = useNavigate()
    const [cartAmount, setCartAmount] = useState(0)

    useEffect(() => {
      navigate('/main'); 
    }, []);
  return (
    <ShoppingCartContext.Provider value={{ cartAmount, setCartAmount }}>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/main' element={<Main />}/>
    </Routes>
    </ShoppingCartContext.Provider>
  );
}

export default App;
