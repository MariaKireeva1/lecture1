import { api } from "../api/api.js";

const cartAmount = document.querySelector('.header__cart_circle');

export const removeFromCart = (cart, product) => {
    let storage = JSON.parse(localStorage.getItem('userData'));
    cart.classList.remove('product__cart—in')
    let updatedOrdersArray = storage.shoppingCart.filter((item) => item.id !== product.id);
    storage.shoppingCart = updatedOrdersArray;
    api.UpdateShoppingCart(storage.id, storage)
    localStorage.setItem('userData', JSON.stringify(storage));
    cartAmount.innerHTML = `${storage.shoppingCart.length}`;
}
