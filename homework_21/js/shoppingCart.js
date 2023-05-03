import { api } from "../api/api.js";
import { writeName } from "../feature/writeNameInHeader.js";
writeName()


const cartTable = document.querySelector('.products__table')
const orderBtn = document.querySelector('.order__btn')
const orderSummaryPrice = document.querySelector('.order__summary-price');
let storage = JSON.parse(localStorage.getItem('userData'));
const cartAmount = document.querySelector('.header__cart_circle')


const deleteFromCart = async (id) => {
    let updatedOrdersArray = storage.shoppingCart.filter((item) => item.id !== id);
    storage.shoppingCart = updatedOrdersArray;
    await api.UpdateShoppingCart(storage.id, storage)
    localStorage.setItem('userData', JSON.stringify(storage))
    cartTable.querySelector(`tr[data-id="${id}"]`).remove();
    cartAmount.innerHTML = `${storage.shoppingCart.length}`;
    countTotalInSummary()
}

const renderProductInCart = async (order) => {
    let product = await api.getProductById(order.id);
    const tr = document.createElement('tr');
    tr.dataset.id = `${product.id}`
    tr.innerHTML =`
            <td class="cart__name">
                <img src="./images/products/${product.img}.png" alt="" class="cart__photo">  <b>${product.title}</b>
            </td>
            <td class="cart__price">$${product.price}</td>
            <td>${product.sale ? `-${product.salePercent}%`: '-'}</td>
            <td><input type="number" value='${order.count}' min="1"></td>
            <td class="cart__total">${`$${countTotal(product, order)}`}</td>
            <td><img src="./images/delete.png" alt="" class="cart__delete"></td>
    `;


    const cartCountInput = tr.querySelector('input[type="number"]')
    const cartTotal = tr.querySelector('.cart__total')
    const deleteBtn = tr.querySelector('.cart__delete');


    cartCountInput.addEventListener('input', async () => {
        let updatedArray = storage.shoppingCart.findIndex((item) => item.id == order.id);
        storage.shoppingCart[updatedArray].count = cartCountInput.value;
        cartCountInput.setAttribute('value', cartCountInput.value);
        cartTotal.innerHTML = `$${countTotal(product, order)}`
        countTotalInSummary()
        localStorage.setItem('userData', JSON.stringify(storage));
        await api.UpdateShoppingCart(storage.id, storage);
    });

    deleteBtn.addEventListener('click', () => deleteFromCart(product.id))

    cartTable.append(tr);
}
 

const countTotal = (product, order) => {
    const total = product.sale ? order.count * (product.price - (product.salePercent/100 * product.price)) : order.count * product.price;
    return total;
}


const countTotalInSummary = async () => {
    let sum = 0;
    let products = await api.getData()
    storage.shoppingCart.forEach(async (order) => {
        let result = products.find((product) => product.id == order.id);
        sum += countTotal(result, order);
    })

    orderSummaryPrice.innerHTML = `$${sum}`
  };



const completeOrder = async () => {
    storage.shoppingCart.forEach((item) => {
        storage.orders.push(item)
    })
    storage.shoppingCart = [];
    localStorage.setItem('userData', JSON.stringify(storage))
    cartAmount.innerHTML = `${storage.shoppingCart.length}`;
    await api.UpdateShoppingCart(storage.id, storage);
    window.location.href = './account.html';
}

orderBtn.addEventListener('click', completeOrder)

storage.shoppingCart.forEach((order) => {
    renderProductInCart(order);
})

countTotalInSummary()