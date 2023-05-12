import { api } from "../api/api.js";


const cartAmount = document.querySelector('.header__cart_circle');


export const addToCart = (product) => {
    let storage = JSON.parse(localStorage.getItem('userData'));
    if (!storage) {
        window.location.href = './sign.html';
        return
    }

    const cartImg = document.querySelector(`div[data-title="${product.dataset.title}"] .item__cart`);
    cartImg.classList.add('product__cart—in');


    storage.shoppingCart.push({ 
        id: product.dataset.id,
        count: 1
    })
    api.UpdateShoppingCart(storage.id, storage)
    localStorage.setItem('userData', JSON.stringify(storage));
    cartAmount.innerHTML = `${storage.shoppingCart.length}`
}