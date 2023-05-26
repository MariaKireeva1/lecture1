import { api } from "../api/api.js";
const addHero = document.querySelector('.addHero');

export let renderAddForm = () => {
    const block = document.createElement('div');
    block.classList.add('item');
    const form = document.createElement('form');
    form.innerHTML = ` 
            <label> Name:
             <input type="text"id="nameInput">
            </label>
           `
    api.GET_UNIVERSES().then((res) => {
      let select = document.createElement('select');
      select.id = 'addSelect'
      res.forEach((item) => {
          const option = document.createElement('option');
          option.value = item.name;
          option.textContent = item.name;
          select.appendChild(option)
      })
      form.innerHTML += `
            <label> Comics: ${select.outerHTML}
            </label>
            
            <label>Favourite:
               <input type="checkbox" id="favourite">
             </label>
             <button >Add</button>`
    })
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameInput = document.querySelector('#nameInput');
      const addSelect = document.querySelector('#addSelect');
      const favouriteCheckbox = document.querySelector('#favourite');
      if (nameInput.value && addSelect.value) {
          const newHero = {
          name: nameInput.value,
          comics: addSelect.value,
          favourite: favouriteCheckbox.checked
          }
  
          api.GET_EXISTED().then((res) => {
            if (res.findIndex((el) => newHero.name === el.name) < 0) { 
                api.ADD(newHero);
            } else {
                console.log(`Герой з таким ім'ям вже є в базі`);
            }
          })
      }
      event.target.reset()
    })
  
    block.append(form);
    addHero.append(block)
  }