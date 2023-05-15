import {renderExistedHeroes} from '../feature/renderExisted.js'

export let api = {
    DELETE: async (id) => {
        await fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes/${id}`, {
            method: 'DELETE'
        })
    }, 

    UPDATE: async (hero, id) => {
        await fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes/${id}`, {
            method: 'PUT', 
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
             },
             body: JSON.stringify(hero)
          })
    }, 

    ADD: async (hero) => {
        let result = await fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8' 
             },
             body: JSON.stringify(hero)
          }).then((res) => res.json())
          renderExistedHeroes(result);
    }, 

    GET_EXISTED: async () => {
        let result = await fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes`).then((res) => res.json());
        return result;
    },

    GET_UNIVERSES: async () => {
        let result = await fetch(`https://63693f7228cd16bba71904e4.mockapi.io/universes`).then((res) => res.json());
        return result
    }
}
