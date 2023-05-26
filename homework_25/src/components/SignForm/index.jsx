import React, {useState, useRef} from 'react';
import Input from '../Input';
import Button from '../common/Button';
import { api } from '../../services/api';
import './style.sass'
import { useNavigate } from 'react-router-dom';


function SignForm(props) {
    const navigate = useNavigate()
    const formElement = useRef(null);
    const errorElement = useRef(null);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const updatePassword = (value => {
        setPassword(value)
    })
    const updateEmail = (value => {
        setEmail(value)
    })

const sign = async (e) => {
    e.preventDefault()
    let users = await api.getUsers()
    const existedUser = users.find(item => item.email == email);

    if (!existedUser) {
        errorElement.current.classList.add('error-active')
       errorElement.current.innerHTML = 'Invalid Email'
       setTimeout(() => {
        errorElement.current.classList.remove('error-active')
        },3000)
    } else if (existedUser.password !== password) {
        errorElement.current.classList.add('error-active')
        errorElement.current.innerHTML = 'Invalid Password'
        setTimeout(() => {
         errorElement.current.classList.remove('error-active')
         },3000)
    } else {
        existedUser.status = true
        localStorage.setItem('userData', JSON.stringify(existedUser))
        api.changeStatus(existedUser.id, true);
        formElement.current.reset()
        navigate('/main')
    } 
}

    return (
        <form className="signIn" ref={formElement}>
            <h2>Secure Sign In</h2>
            <div className="error" ref={errorElement}></div>
            <h3>For current customers</h3>
            <Input placeholder='Email Address' type='text' action={updateEmail} />
            <Input placeholder='Password' type='password' action={updatePassword}/>
            <Button title='Sign In' action={sign}/>
        </form>
    );
}

export default SignForm;