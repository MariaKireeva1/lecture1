import React, {useState, useEffect} from 'react';
import {Input} from './components/Input/index.jsx'
import {Button} from './components/Button/index.jsx'
import {Task} from './components/Task/index.jsx'
import "./App.css" 

function App(props) {
    const [titleInput, setTitleInput] = useState('');
    const [descrInput, setDescrInput] = useState('');
    const [editTitleInput, setEditTitleInput] = useState('');
    const [editDescrInput, setEditDescrInput] = useState('');
    const [list, setList] = useState([])
    
    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem('list'));
        if (storage && storage.length > 0) {
            let list = storage.map((item) => {
                return {...item, editing: false}
            })
          setList(list);
        }
      }, []);


    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    const setTitleChange = (event) => setTitleInput(event.target.value);

    const setDescrChange = (event) => setDescrInput(event.target.value);
    

    const editTitleChange = (event) => setEditTitleInput(event.target.value);

    const editDescrChange = (event) => setEditDescrInput(event.target.value);

    const addTask = () => {
        if (titleInput.trim() != '' && descrInput.trim() != '') {
            const newTask = {
                id: Date.now(),
                title: titleInput,
                descr: descrInput,
                status: false,
                editing: false
            }
            setList([...list, newTask]);
            setDescrInput('')
            setTitleInput('')
        }
    } 

    const changeCompletedStatus = (el) => {
        let task = list.find((item) => item.id === el.id)
        task.status ? task = {...task, status: false} : task = {...task, status: true };

        const updatedList = list.map((item) => {
            if (item.id === el.id) {
              return task
            } else {
                return item
            }
          });
          setList(updatedList);
    }

    const deleteTask = (id) => {
        const updatedList = list.filter((task) => task.id != id)
        setList(updatedList)
    }

    const editTask = (el) => {
        let task = list.find((item) => item.id === el.id)
        if (task.editing && editTitleInput.trim() != '' && editDescrInput.trim() != '') {
            task = {...task, title: editTitleInput, descr: editDescrInput, editing: false}
        } else {
            task = {...task, editing: true };
        }

        const updatedList = list.map((item) => {
            if (item.id === el.id) {
              return task
            } else {
                return item
            }
        });
        setList(updatedList);
        setEditTitleInput(task.title);
        setEditDescrInput(task.descr);
    }


    return (
        <div className='wrapper'>
            <h1>ToDo Application</h1>
            <div className='todo__wrapper'>
                <Input onChange={setTitleChange} title='Todo title' value={titleInput}/>
                <Input onChange={setDescrChange}  title='Description' value={descrInput}/>
                <Button onClick={addTask} title='Create Todo' color='blue'/>
            </div>

            {list.length > 0 &&
                <div className='tasks__wrapper'>
                    <table>
                       <thead>
                            <Task title={<h4>Name</h4>} descr={<h4>Description</h4>} status={<h4>Status</h4>} action={<h4>Action</h4>}/>
                        </thead>
                        <tbody>
                        {
                            list.map((el) => {
                                return <Task
                                    checked={el.status ? true : false}
                                    changeCheckbox={() => changeCompletedStatus(el)}
                                    title={el.editing ? <Input onChange={editTitleChange} title='Todo title' value={editTitleInput}/> : el.title} 
                                    descr={el.editing ? <Input onChange={editDescrChange}  title='Description' value={editDescrInput}/> : el.descr} 
                                    status={<Button title={el.status ? 'Completed' : 'Pending'} color={el.status ? 'green' : 'red'} width='80px' onClick={() => changeCompletedStatus(el)}/>} 
                                    action={
                                        <div style={{display: 'flex', gap: '5px'}}>
                                        <Button title={el.editing ? 'Save' : 'Edit'} color={el.editing ? 'green' : 'blue'} width='50px' onClick={() => editTask(el)}/>
                                        <Button title="Delete" color="red" width='70px'onClick={() => deleteTask(el.id)}/>
                                        </div>
                                  }
                                  />
                            })
                        }
                        </tbody>
                    </table>
                 </div>
            }
        </div>
    );
}

export default App;
