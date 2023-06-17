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

  getUser: async (id) => {
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
    return axios.get('https://634e9f834af5fdff3a625f84.mockapi.io/products')
  },

  deleteAccount: async (id) => {
    await axios.delete(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${id}`)
  },

  updateShoppingCart: async (id, product) => {
    return await fetch(BASE_URL + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(product)
    })
  },
  getProductById: (id) => {
    return axios.get('https://634e9f834af5fdff3a625f84.mockapi.io/products/' + id)
  }
}

