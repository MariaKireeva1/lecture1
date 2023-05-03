import { api } from "../api/api.js";

export const writeName = () => {
    const userName = document.querySelector('.header__greeting');
    const logOut = document.querySelector('.header__logout');
    const cartAmount = document.querySelector('.header__cart_circle')
    
    let storage = JSON.parse(localStorage.getItem('userData'));
    
    if(storage) {
        logOut.classList.add('header__logout-active')
        userName.innerHTML = `Hi, <a href="./account.html">${storage.name}</a>`;
        cartAmount.innerHTML = `${storage.shoppingCart.length}`
    }
    
    logOut.addEventListener('click', () => {
        localStorage.removeItem('userData');
        api.changeStatus(storage.id, false)
    })
}
