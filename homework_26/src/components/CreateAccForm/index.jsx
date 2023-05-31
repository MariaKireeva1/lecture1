import React, { useState, useRef, useContext } from 'react';
import Button from '../common/Button';
import Input from '../Input';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import ShoppingCartContext from '../../context/ShoppingCartContext';

function CreateAccForm(props) {
    const navigate = useNavigate()
    const formElement = useRef(null);
    const errorElement = useRef(null);
    const [name, setName] = useState('')
    const { setIsAuth } = useContext(ShoppingCartContext)

    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [email, setEmail] = useState('')
    const updateName = (value) => {
        setName(value)
    }
    const updatePassword = (value => {
        setPassword(value)
    })
    const updateEmail = (value => {
        setEmail(value)
    })
    const updateCheckPassword = (value => {
        setCheckPassword(value)
    })

    const createAcc = async (e) => {
        e.preventDefault()

        if (name === '' || email === '' || password === '' || checkPassword === '') {
            return
        }

        let users = await api.getUsers()
        const existedUser = users.find(item => item.email == email);

        if (existedUser) {
            errorElement.current.classList.add('error-active')
            errorElement.current.innerHTML = `User with email ${email} already exist`
            setTimeout(() => {
                errorElement.current.classList.remove('error-active')
            }, 3000)
        } else if (password !== checkPassword) {
            errorElement.current.classList.add('error-active')
            errorElement.current.innerHTML = `Password does not match`
            setTimeout(() => {
                errorElement.current.classList.remove('error-active')
            }, 3000)

        } else {
            const newUser = {
                name: name,
                email: email,
                password: password,
                status: true
            };
            api.postUser(newUser);
            formElement.current.reset()
            setIsAuth(true)
            navigate('/main')
        }
    }


    return (
        <form ref={formElement}>
            <Typography variant='h2' sx={{ fontSize: '1.5em', fontWeight: 'bold', margin: '20px 0' }}>Quick Registration</Typography>
            <Box className="error" ref={errorElement}></Box>
            <Typography variant='h3' sx={{ fontSize: '1.17em', fontWeight: 'bold', margin: '20px 0' }}>For new customers</Typography>
            <Input type="text" placeholder="Full name" action={updateName} />
            <Input type="text" placeholder="Email Address" action={updateEmail} />
            <Input type="password" placeholder="Password" action={updatePassword} />
            <Input type="password" placeholder="Verify Password" action={updateCheckPassword} />
            <Button title='Create Account' action={createAcc} />
        </form>
    );
}

export default CreateAccForm;

