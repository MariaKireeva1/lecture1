import { BASE_URL } from "../common/constants"
import axios from "axios"

export let api = {
  getUsers: async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  },

  getUser: (id) => {
    return axios.get(BASE_URL + id)
  },

  changeStatus: async (id, status) => {
    await fetch(BASE_URL + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ "status": status })
    })
  },

  postUser: async (user) => {
    return await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(user)
    })
  },

  getProducts: async () => {
    try {
      const response = await fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/products`);
      if (!response.ok) {
        throw new Error('Error fetching products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  updateShoppingCart: async (id, product) => {
   return await fetch(BASE_URL + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(product)
    })
  }
}

