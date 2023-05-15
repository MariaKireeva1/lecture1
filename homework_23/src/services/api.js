export default {
    getTodos: async () => {
        return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo`).then(res => res.json())
    },

    updateStatus: async (task) => {
       return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo/${task.id}`, {
            method: 'PUT',
            body: JSON.stringify({completed: !task.completed}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
    }, 

    deleteTask: async (task) => {
      return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo/${task.id}`, {
            method: 'DELETE',
          }).then(res => res.json())
    },

    addTask: async (title) => {
        return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo`, {
            method: 'POST',
            body: JSON.stringify({title: title, completed: false}),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
    },

    updateTask: async(task) => {
        return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo/${task.id}`, {
            method: 'PUT',
            body: JSON.stringify({title: task.title}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
    }
}