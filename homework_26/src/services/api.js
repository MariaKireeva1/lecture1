export let api = {
  getUsers: async () => {
    try {
      const response = await fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users`);
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  },

  changeStatus: async (id, status) => {
    await fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ "status": status })
    })
  },

  postUser: async (user) => {
    let result = await fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(user)
    }).then((res) => res.json())
    localStorage.setItem('userData', JSON.stringify(result))
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

  UpdateShoppingCart: async (id, product) => {
    await fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(product)
    })
  }
}

