const formSign = document.querySelector('.sign__form')
const signEmail = document.querySelector('#signEmail')
const signPassword = document.querySelector('#signPassword')
const signError = document.querySelector('.error');
const formCreate = document.querySelector('.createAcc__form');
const createName = document.querySelector('#createName');
const createEmail = document.querySelector('#createEmail');
const createPassword = document.querySelector('#createPassword');
const verifyPassword = document.querySelector('#verifyPassword');
const createError = document.querySelector('.createError')
import { api } from "../api/api.js";

formCreate.addEventListener('submit', async (event) => {
    event.preventDefault();

    let users = await api.getUsers()
    const existedUser = users.find(item => item.email == createEmail.value);

    if (existedUser) {
        createError.classList.add('createError-active');
        createError.innerHTML = `User with email ${createEmail.value} already exist`
        removeError()
    } else if (createPassword.value !== verifyPassword.value) {
        createError.classList.add('createError-active');
        createError.innerHTML = `Password not matches`;
        removeError()
    } else {
        createError.classList.remove('createError-active');
        const newUser = {
            name: createName.value,
            email: createEmail.value,
            password: createPassword.value,
            status: true
        };
        
        api.postUser(newUser);
    }
})


formSign.addEventListener('submit', async (event) => {
    event.preventDefault();
    let users = await api.getUsers()
    const existedUser = users.find(item => item.email == signEmail.value);

    if (!existedUser) {
        signError.innerHTML = `Invalid email`
        signError.classList.add('error-active')
        removeError()
       } else if (existedUser.password !== signPassword.value) {
        signError.innerHTML = `Invalid password`
        signError.classList.add('error-active');
        removeError()
       } else {
        signError.classList.remove('error-active');
        api.changeStatus(existedUser.id, true);
        localStorage.setItem('userData', JSON.stringify(existedUser))
        window.location.href = './index.html'
        formSign.reset();
       }
})


const removeError = () => {
    setTimeout(() => {
        signError.classList.remove('error-active')
        createError.classList.remove('createError-active');
    },3000)
}
