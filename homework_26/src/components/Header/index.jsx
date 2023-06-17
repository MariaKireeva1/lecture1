import React from 'react';
import './style.sass'
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthAction, setUserAction } from '../../store/user/usersAction';


function Header(props) {
    let userId = JSON.parse(localStorage.getItem('userId'));
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let user = useSelector(store => store.user.user)


    const logOut = () => {
        localStorage.removeItem('userId');
        api.changeStatus(userId, false)
        dispatch(setIsAuthAction(false))
        dispatch(setUserAction(null))
        navigate('/main')
    }


    return (
        <AppBar position='static'>
            <Toolbar className="header">
                <Box className="header__logo" onClick={() => navigate('/main')}> <Box component='img' src={`./images/logo.png`} alt="logo"></Box></Box>

                <Box className="header__info">
                    <Box className="header__greeting">
                        {user ?
                            <Box className="header__greeting">
                                Hi, <Typography variant='span' onClick={() => navigate('/profile')} >{user.name}</Typography>
                            </Box>
                            :
                            <Box className="header__greeting" >
                                Hi, <Typography variant='span' onClick={() => navigate('/login')}>Log in</Typography>
                            </Box>
                        }

                    </Box>

                    <Box className="header__stick"></Box>

                    <Box className="header__cart">
                        <Box component='img' src={`./images/shopping-cart.png`} alt="cart" onClick={() => navigate('/cart')}></Box>
                        <Box className="header__cart_circle">{user ? user.shoppingCart.length : 0}</Box>
                    </Box>

                    <Box onClick={() => logOut()} className={user ? "header__logout header__logout-active" : "header__logout"}>Log out</Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;