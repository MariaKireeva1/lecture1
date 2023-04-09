const form = document.querySelector('form');
const BASE_URL = 'https://api.chucknorris.io/jokes/';
const contentList = document.querySelector('.content__list');
const radios = document.querySelectorAll('input[type="radio"]');
const favouriteList = document.querySelector('.favourite__list');
const categoriesList = document.querySelector('.category__list');
const searchInput = document.querySelector('.choice__input input');


const renderCategoryElement = (category) => {
    const div = document.createElement('div');
    div.classList.add('category');
    div.innerHTML = category;
    div.id = category;
    categoriesList.append(div)
}

const getCategories = async () => {
    categoriesList.innerHTML = '';
    let result = await fetch(`https://api.chucknorris.io/jokes/categories`).then((res) => res.json());
    result.forEach((item) => renderCategoryElement(item));
    categoriesList.style.display = 'flex';
}

const getHours = (joke) => {
    let created = new Date(joke.created_at);
    let now = new Date();
    let differenceInTime = Math.abs(created - now);
    return Math.floor(differenceInTime / (1000 * 60 * 60));
}

radios.forEach((radio) => {
   radio.addEventListener('change', () => {
        if (radio.id == 'categories') {
            getCategories()
        } else if (radio.id == 'search') {
            searchInput.style.display = 'block';
            searchInput.required = true;
        }
   })

}) 

categoriesList.addEventListener('click', (event) => {
    if (!event.target.classList.contains('category__list')) {
        event.target.classList.toggle('chosen')
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    contentList.innerHTML = '';
    radios.forEach((radio) => {
        if (radio.checked) {
            radio.checked = false;
            switch (radio.id) {
                case 'random':
                    getRandomJoke();
                case 'categories':
                    [...categoriesList.children].forEach((item) => {
                                if (item.classList.contains('chosen')) {
                                    item.classList.remove('chosen')
                                    getJokeFromCategory(item.id)
                                }
                    }) 
                    categoriesList.style.display = 'none';
                case 'search':
                    searchInput.style.display = 'none'
                    if (searchInput.value != '') {
                        getJokeFromSearch(searchInput.value);
                        searchInput.value = '';
                        searchInput.required = false
                    } 
            }
        }
    })
})

const getRandomJoke = async () => {
   let joke = await fetch(`${BASE_URL}random`).then((res) => res.json());
   joke.category = 'random'
    render(joke);
}

const getJokeFromCategory = async (category) => {
    let joke = await fetch(`${BASE_URL}random?category=${category}`).then((res) => res.json());
    joke.category = category;
    render(joke);
}

const getJokeFromSearch = async (query) => {
    try {
      let response = await fetch(`${BASE_URL}search?query=${query}`);
      if (!response.ok) {
        throw new Error('No jokes with this word'); 
      }
      let joke = await response.json();
      joke.result.forEach((item) => {
        item.category = 'search';
        render(item);
      });
    } catch (error) {
      console.log(error); 
    }
  };


const removeFavourite = (joke) => {
    let store = getStore();
    let updatedStore = store.filter((item) => item.id !== joke.id);
    localStorage.setItem('favourite', JSON.stringify(updatedStore));
    favouriteList.querySelector(`li[data-id="${joke.id}"]`).remove();
}

const addFavourite = (joke) => {
    let store = getStore();
    store.push({...joke, like: true});
    localStorage.setItem('favourite', JSON.stringify(store));
    render({...joke, like: true})
}

const clickHeart = (joke) => {
   const img = document.querySelector(`li[data-id="${joke.id}"] img.content__joke-heart`)

   if (img.src.includes('heart')) {
        img.src = '/homework_18/img/liked.svg';
        img.alt = 'liked';
        addFavourite(joke)
   } else {
        img.src = '/homework_18/img/heart.svg';
        img.alt = 'like';
        removeFavourite(joke)
   }
}

const markIfFavorite = (joke, img) => {
    let store = getStore();
    store.findIndex((el) => joke.id === el.id) >= 0 && (img.src = './img/liked.svg')
}

const render = (joke) => {
    const newJoke = document.createElement('li');
    newJoke.classList.add('content__joke');
    newJoke.dataset.id = joke.id;

    newJoke.innerHTML =  `
    <div class="content__joke-id">ID: ${joke.id}</div>
    <div class="content__joke-value">${joke.value}</div>
    <div class="content__joke-time">Last update: ${getHours(joke)} hours ago</div>
    ` 
    const messageImg = document.createElement('div');
    messageImg.classList.add('content__joke-mess');
    messageImg.innerHTML = '<div><img src="/homework_18/img/message.svg"></div>';
    newJoke.append(messageImg);


    if (joke.category != 'search' && !joke.like) {
        newJoke.innerHTML += `<div class="content__joke-category">${joke.category}</div>`
    }

    const heart = document.createElement('img');
    heart.classList.add('content__joke-heart');
    heart.src = '/homework_18/img/heart.svg';
    heart.alt = 'like'
    newJoke.append(heart);

    heart.addEventListener('click', () => clickHeart(joke));
    
    if (joke.like) {
        newJoke.classList.add('favourite__joke');
        messageImg.classList.add('content__joke-mess-grey');
        favouriteList.append(newJoke);
        heart.src = '/homework_18/img/liked.svg';
        heart.alt = 'liked';
    } else {
        markIfFavorite(joke, heart);
        contentList.append(newJoke);
    }
}

function getStore() {
    return JSON.parse(localStorage.getItem('favourite')) ?? []
}

function renderFavorite() {
    let store = getStore();
    store.forEach((joke) => render(joke))
}

renderFavorite()