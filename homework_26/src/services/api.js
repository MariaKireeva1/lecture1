import { BASE_URL, users, products, headersConfig } from "../common/constants"
import axios from "axios"

export let api = {
  getUsers: async () => {
    try {
      const response = await fetch(BASE_URL + users);
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },

  getUser: async (id) => {
    return axios.get(BASE_URL + users + id)
  },

  changeStatus: async (id, status) => {
    await fetch(BASE_URL + id, {
      method: 'PUT',
      headers: headersConfig,
      body: JSON.stringify({ "status": status })
    })
  },

  postUser: async (user) => {
    return await fetch(BASE_URL + users, {
      method: 'POST',
      headers: headersConfig,
      body: JSON.stringify(user)
    })
  },
  getProducts: async () => {
    return axios.get(BASE_URL + products)
  },

  deleteAccount: async (id) => {
    await axios.delete(BASE_URL + users + id)
  },

  updateShoppingCart: async (id, product) => {
    return await fetch(BASE_URL + users + id, {
      method: 'PUT',
      headers: headersConfig,
      body: JSON.stringify(product)
    })
  },
  getProductById: (id) => {
    return axios.get(BASE_URL + products + id)
  }
}

