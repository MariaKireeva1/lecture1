import { api } from "../api/api.js";

export let renderExistedHeroes = (hero) => {
    const heroesList = document.querySelector('.heroesList');
    const block = document.createElement('div');
    block.classList.add('item');
    block.dataset.id = hero.id
    block.innerHTML = `
    <form>
    <label> Name:
      <input type="text" class="updateInput" value="${hero.name ? hero.name : ''}">
    </label>
   
    <label> Comics:
      <select name="" class="updateSelect">
          <option value="DC" ${hero.comics === 'DC' ? 'selected' : ''}>DC</option>
          <option value="Marvel" ${hero.comics === 'Marvel' ? 'selected' : ''}>Marvel</option>
      </select>
    </label>

    <label>Favourite:
      <input type="checkbox" class="updateFavourite" ${hero.favourite ? 'checked' : ''}>
    </label>
  </form>
    `
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Delete';
    block.append(btnDelete);

    const btnUpdate = document.createElement('button');
    btnUpdate.innerText = 'Update';
    block.append(btnUpdate);


    btnUpdate.addEventListener('click', (event) => {
      let id = event.target.parentElement.dataset.id;
      const updateFavourite = document.querySelector(`div[data-id="${id}"] .updateFavourite`);

      const updatedHero = {
        favourite: updateFavourite.checked
      }
      api.UPDATE(updatedHero, id)
    })

    btnDelete.addEventListener('click', () => {
      api.DELETE(hero.id);
      heroesList.querySelector(`div[data-id="${hero.id}"]`).remove()
    })
    heroesList.append(block);
};
