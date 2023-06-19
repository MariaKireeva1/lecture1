import React from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction, setIsAuthAction } from '../../store/user/usersAction';
import { useStyle } from './style';


function Header(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let user = useSelector(store => store.user.user)
    const classes = useStyle()

    const logOut = () => {
        localStorage.removeItem('userId');
        api.changeStatus(user.id, false)
        dispatch(setIsAuthAction(false))
        dispatch(deleteUserAction(null))
        navigate('/main')
    }
    return (
        <AppBar position='static'>
            <Toolbar className={classes.header}>
                <Box className={classes.headerLogo} onClick={() => navigate('/main')}> <Box component='img' src={`./images/logo.png`} alt="logo"></Box></Box>

                <Box className={classes.headerInfo}>
                    <Box className={classes.headerGreeting}>
                        Hi, <Typography variant='span' onClick={() => navigate('/profile')} >{user ? `${user.name}` : 'Log in'}</Typography>
                    </Box>

                    <Box className={classes.headerStick}></Box>

                    <Box className={classes.headerCart}>
                        <Box component='img' src={`./images/shopping-cart.png`} alt="cart" onClick={() => navigate('/cart')}></Box>
                        <Box className={classes.headerCartCircle}>{user ? user.shoppingCart.length : 0}</Box>
                    </Box>

                    <Box onClick={() => logOut()} className={user ? `${classes.headerLogout} ${classes.headerLogoutActive}` : classes.headerLogout} >Log out</Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;