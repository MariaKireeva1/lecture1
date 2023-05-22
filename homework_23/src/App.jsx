import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import API from './services/api.js'
import Table from './components/Table';
import Row from './components/Table/components/Row';
import Button from './components/common/Button';
import './App.css'

function App(props) {
  const [state, setState] = useState({
    todos: [],
    completedList: [],
    pendingList: [],
    currentSection: '', 
    sectionToShow: []
  })



  useEffect(() => {
    API.getTodos().then((res) => setState({ 
        todos: res, 
        completedList: res.filter((el) => el.completed),
        pendingList: res.filter((el) => !el.completed),
        currentSection: 'All',
        sectionToShow: res
      }));
  }, []);


  const updateTask = (updatedTask) => {
    const updatedTodos = state.todos.map((task) => {
      if (task.id === updatedTask.id) {
        task.title = updatedTask.title
        return task
      } else {
        return task
      }
    });
    console.log(updatedTodos);
    setState({ ...state, todos: updatedTodos });
  };


const changeStatus = (task) => {
    API.updateStatus(task).then(res => {

      const updatedTodos = state.todos.map(el => (el.id === res.id ? res : el));

      if (state.currentSection == 'Pending') {
        const updatedPending = state.pendingList.filter(el => (el.id !== res.id));
        const updatedCompleted = [...state.completedList, res]
        setState({...state, todos: updatedTodos, pendingList: updatedPending, completedList: updatedCompleted, sectionToShow: updatedPending})
      } else if (state.currentSection == 'Completed'){
       const updatedPending = [...state.pendingList, res]
        const updatedCompleted = state.completedList.filter(el => (el.id !== res.id));
        setState({...state, todos: updatedTodos, pendingList: updatedPending, completedList: updatedCompleted, sectionToShow: updatedCompleted})
      } else if (state.currentSection == 'All') {
        setState({...state, todos: updatedTodos, sectionToShow: updatedTodos})
      }
      
    })
  }


  const deleteTask = (task) => {
    console.log(state);
    console.log(task);
    API.deleteTask(task).then((res) => {
      const updatedTodos = state.todos.filter(el => (el.id !== res.id));

        if (state.currentSection == 'Completed') {
      const updatedCompleted = state.completedList.filter((el) => el.id !== res.id)
      setState({...state, todos: updatedTodos, completedList: updatedCompleted, sectionToShow: updatedCompleted})
        } else if (state.currentSection == 'Pending'){
      const updatedPending = state.pendingList.filter((el) => el.id !== res.id)
      setState({...state, todos: updatedTodos, pendingList: updatedPending, sectionToShow: updatedPending})
        } else if (state.currentSection == 'All') {
          setState({...state, todos: updatedTodos, sectionToShow: updatedTodos})
        }

    })
  }


const openSection = (e) => {
  switch (e.target.innerHTML) {
    case 'All':
      setState({...state, currentSection: 'All', sectionToShow: state.todos})
      break;
    case 'Pending':
      setState({...state, currentSection: 'Pending', sectionToShow: state.todos.filter((el) => !el.completed)})
      break;
    case 'Completed':
      setState({...state, currentSection: 'Completed', sectionToShow: state.todos.filter((el) => el.completed)})
      break;
  }
}


const addTask = (title) => {
  API.addTask(title).then((res) => {
    if (state.currentSection == 'All') {
      setState({...state, todos: [...state.todos, res], sectionToShow: [...state.sectionToShow, res]})
    } else if (state.currentSection == 'Pending') {
      setState({...state, todos: [...state.todos, res], sectionToShow: [...state.sectionToShow, res]})
    } else if (state.currentSection == 'Completed') {
      setState({...state, todos: [...state.todos, res], currentSection: 'Pending', sectionToShow: [...state.todos.filter((el) => !el.completed), res]})
    }
  });
}

  return (
    <div className='wrapper'>
      <h1>Todo Application</h1>
      <Form addTask={addTask}/>
      <div style={{display: 'flex', gap: '10px', marginBottom: '30px'}}>
        <Button title='All'borderRadius='15px' width='110px' action={(e) => openSection(e)}/>
        <Button title='Pending' color='red' width='110px'  action={(e) => openSection(e)}/>
        <Button title='Completed'color='green' width='150px'  action={(e) => openSection(e)}/>
      </div>
      <Table list={state.sectionToShow}
       changeStatus={changeStatus} 
       deleteTask={deleteTask}
       updateTask={updateTask}/>
    </div>
  );
}

export default App;