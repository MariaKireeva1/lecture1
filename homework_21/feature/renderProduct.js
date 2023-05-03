let storage = JSON.parse(localStorage.getItem('userData'));
import { addToCart } from "./addToCart.js";
import { removeFromCart } from "./removeFromCart.js";


export const renderProduct = (product, container) => {
    const block = document.createElement('div');
    block.classList.add('item');
    block.dataset.title = `${product.title}`;
    block.dataset.id = `${product.id}`;


    block.innerHTML = `
    <div class="item__img">
        <img src="./images/products/${product.img}.png" alt="${product.title}">
    </div>`

    if (product.sale) {
        block.classList.add('item__sale');

        block.innerHTML += `
        <div class="item__info">
            <div class="item__info-name">${product.title}</div>
        <div class="sale">
            <div class="item__info-price crossed">$${product.price}</div>
            <div class="item__sale-amount">-${product.salePercent}%</div>
        </div>
            <div class="item__info-price">$${product.price - (product.price * product.salePercent / 100)}</div>
        </div>
        <div class="item__cart"><img src="./images/shopping-cart.png" alt="cart"></div>
        `
    } else {
        block.innerHTML += `
        <div class="item__info">
            <div class="item__info-name">${product.title}</div>
            <div class="item__info-price">$${product.price}</div>
        </div>
        <div class="item__cart"><img src="./images/shopping-cart.png" alt="cart"></div>
        `
    }
   

    const cart = block.querySelector('.item__cart');
    cart.addEventListener('click', () => {
        if (cart.classList.contains('product__cart—in')) {
            removeFromCart(cart, product);
        } else {
            addToCart(block);
        }
    });

   if (storage) {
    storage.shoppingCart.forEach((item) => {
        if (item.id == product.id) {
             cart.classList.add('product__cart—in');
        }
     })
   }
   container.append(block)
}