export let api  = {
    getUsers: async () => {
    return await fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users`).then(res => res.json())
    }, 

    changeStatus:async (id, status) => {
        await fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${id}`, {
            method: 'PUT', 
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
             },
             body: JSON.stringify({"status": status})
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
        localStorage.setItem('userData', JSON.parse(result))
    }, 

    getProducts: async () => {
      return await fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/products`).then(res => res.json());
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