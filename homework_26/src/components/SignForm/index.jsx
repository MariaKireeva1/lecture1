import React, { useState, useRef, useContext } from 'react';
import Input from '../Input';
import Button from '../common/Button';
import { api } from '../../services/api';
import './style.sass'
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import ShoppingCartContext from '../../context/ShoppingCartContext';


function SignForm(props) {
    const navigate = useNavigate()
    const formElement = useRef(null);
    const { setIsAuth } = useContext(ShoppingCartContext)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorActive, setErrorActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const showError = (message) => {
        setErrorMessage(message);
        setErrorActive(true);
        setTimeout(() => {
            setErrorActive(false);
        }, 3000);
    };

    const updatePassword = (value => {
        setPassword(value)
    })
    const updateEmail = (value => {
        setEmail(value)
    })

    const sign = async (e) => {
        if (password === '' || email === '') {
            console.log(password, email);
            return
        }
        e.preventDefault()
        let users = await api.getUsers()
        const existedUser = users.find(item => item.email == email);

        if (!existedUser) {
            showError('Invalid Email')
        } else if (existedUser.password !== password) {
            showError('Invalid Password')
        } else {
            existedUser.status = true
            localStorage.setItem('userData', JSON.stringify(existedUser))
            api.changeStatus(existedUser.id, true);
            formElement.current.reset()
            setIsAuth(true)
            navigate('/main')
        }
    }

    return (
        <form className="signIn" ref={formElement}>
            <Typography variant='h2' sx={{ fontSize: '1.5em', fontWeight: 'bold', margin: '20px 0' }}>Secure Sign In</Typography>
            <Box className={`error ${errorActive ? 'error-active' : ''}`}>
                {errorMessage}
            </Box>
            <Typography variant='h3' sx={{ fontSize: '1.17em', fontWeight: 'bold', margin: '20px 0' }}>For current customers</Typography>
            <Input placeholder='Email Address' type='text' action={updateEmail} />
            <Input placeholder='Password' type='password' action={updatePassword} />
            <Button title='Sign In' action={sign} />
        </form>
    );
}

export default SignForm;