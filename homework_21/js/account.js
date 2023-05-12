import { api } from "../api/api.js";
import { writeName } from "../feature/writeNameInHeader.js";
writeName()


const ordersTable = document.querySelector('.products__table')
const accountName = document.querySelector('.account__info-name');
const accountEmail = document.querySelector('.account__info-email');
const deleteBtn = document.querySelector('.deleteAccount__btn')
let storage = JSON.parse(localStorage.getItem('userData'))


accountName.innerHTML = `${storage.name}`;
accountEmail.innerHTML = `${storage.email}`;


deleteBtn.addEventListener('click', async () => {
    await api.deleteAccount(storage.id);
    window.location.href = './index.html';
    localStorage.removeItem('userData')
})


const renderOrderedProduct = async (order) => {
  
    let product  = await api.getProductById(order.id)

    const tr = document.createElement('tr');
    tr.dataset.id = `${product.id}`
    tr.innerHTML =`
        <td class="cart__name">
            <img src="./images/products/${product.img}.png" alt="" class="cart__photo">  <b>${product.title}</b>
        </td>
        <td class="cart__price">$${product.price}</td>
        <td>${product.sale ? `-${product.salePercent}%`: '-'}</td>
        <td>${order.count}</td>
        <td>$${countTotal(product, order)}</td>
    `
    ordersTable.append(tr);
}


const countTotal = (result, order) => {
    const total = result.sale ? order.count * (result.price - (result.salePercent/100 * result.price)) : order.count * result.price;
    return total;
}

storage.orders.forEach((order) => renderOrderedProduct(order))