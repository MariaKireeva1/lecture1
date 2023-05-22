import React, {useState, useRef} from 'react';
import Button from '../common/Button';
import Input from '../Input';
import { api } from '../../services/api';


function CreateAccForm(props) {
    const formElement = useRef(null);
    const errorElement = useRef(null);
    const [name, setName] = useState('')
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
        let users = await api.getUsers()
        console.log(users);
        const existedUser = users.find(item => item.email == email);

        if (existedUser) {
            errorElement.current.classList.add('error-active')
            errorElement.current.innerHTML = `User with email ${email} already exist`
            setTimeout(() => {
                errorElement.current.classList.remove('error-active')
            },3000)
        } else if (password !== checkPassword) {
            errorElement.current.classList.add('error-active')
            errorElement.current.innerHTML = `Password does not match`
            setTimeout(() => {
                errorElement.current.classList.remove('error-active')
            },3000)

        } else {
            const newUser = {
                name: name,
                email: email,
                password: password,
                status: true
            };
            api.postUser(newUser);
            formElement.current.reset()
        }
    }



    return (
    <form ref={formElement}>
        <h2>Quick Registration</h2>
        <div className="error" ref={errorElement}></div>
        <h3>For new customers</h3>
        <Input type="text" placeholder="Full name" action={updateName}/>
        <Input type="text" placeholder="Email Address" action={updateEmail}/>
        <Input type="password" placeholder="Password" action={updatePassword}/>
        <Input type="password"  placeholder="Verify Password" action={updateCheckPassword}/>
        <Button title='Create Account' action={createAcc}/>
    </form>
    );
}

export default CreateAccForm;

