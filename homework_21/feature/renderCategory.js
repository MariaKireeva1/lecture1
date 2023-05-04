import {renderProduct} from "../feature/renderProduct.js";
import { api } from "../api/api.js";

const body = document.querySelector('body');
const categoriesContainer = document.createElement('div');
categoriesContainer.id = 'categoriesContainer';
body.append(categoriesContainer);

export const renderCategory = async (category) => {
    const categorySection = document.createElement('section')
    categorySection.classList.add('category')
    categorySection.dataset.name = category
    categorySection.innerHTML = `<h2>${category}</h2>`


    const categoryContainer = document.createElement('div')
    categoryContainer.classList.add('category__container')
    categoryContainer.style.display = 'flex'
    
    categorySection.append(categoryContainer);
    categoriesContainer.append(categorySection);

    let products = await api.getData();

    products.forEach((el) => {
        if (el.category == category) {
            renderProduct(el, categoryContainer)
        }
    })

}
