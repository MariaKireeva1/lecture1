import { api } from "../api/api.js";
import { writeName } from "../feature/writeNameInHeader.js";
import {renderCategory} from "../feature/renderCategory.js"
writeName()


const headerCartImg = document.querySelector('.header__cart a');
let storage = JSON.parse(localStorage.getItem('userData'));
if (!storage) {
    headerCartImg.href = './sign.html'
}

const getCategories = async () => {
    let categories = [];
    let products = await api.getData()
    products.forEach((product) => {
        !categories.includes(product.category) && categories.push(product.category)
    })
    categories.forEach((item) => renderCategory(item))
}


getCategories()