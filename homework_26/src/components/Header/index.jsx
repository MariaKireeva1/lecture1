import React, { useContext } from 'react';
import './style.sass'
import { api } from '../../services/api';
import logo from '../../images/logo.png';
import cart from '../../images/shopping-cart.png';
import { useNavigate } from 'react-router-dom';
import ShoppingCartContext from '../../context/ShoppingCartContext';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';


function Header(props) {
    let storage = JSON.parse(localStorage.getItem('userData'));
    const { cartAmount, setIsAuth } = useContext(ShoppingCartContext)
    const navigate = useNavigate()


    const logOut = () => {
        localStorage.removeItem('userData');
        api.changeStatus(storage.id, false)
        setIsAuth(false)
        navigate('/main')
    }


    return (
        <AppBar position='static'>
            <Toolbar className="header">
                <Box className="header__logo" onClick={() => navigate('/main')}> <Box component='img' src={logo}  alt="logo"></Box></Box>

                <Box className="header__info">
                    <Box className="header__greeting">
                        {storage ?
                            <Box className="header__greeting">
                                Hi, <Typography variant='span'>{storage.name}</Typography>
                            </Box>
                            :
                            <Box className="header__greeting" >
                                Hi, <Typography variant='span' onClick={() => navigate('/login')}>Log in</Typography>
                            </Box>
                        }

                    </Box>

                    <Box className="header__stick"></Box>

                    <Box className="header__cart">
                        <Box component='img' img src={cart} alt="cart" onClick={() => navigate('/cart')}></Box>
                        <Box className="header__cart_circle">{storage ? cartAmount : 0}</Box>
                    </Box>

                    <Box onClick={() => logOut()} className={storage ? "header__logout header__logout-active" : "header__logout"}>Log out</Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;