import React, {useState} from 'react';
import Button from '../../../common/Button';
import './styles.module.sass'
import Input from '../../../Input';
import api from '../../../../services/api';
function Row({task, changeStatus, deleteTask, updateTask}) {



    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState('')
    const updateTitle = (value) => {
        setTitle(value)
      }
    
      const editTask = async (task) => {
        if (editing) {
            const updatedTask = { ...task, title: title };
            await api.updateTask(updatedTask).then(res => updateTask(res))
            setEditing(false)
        } else {
            setEditing(true)
        }
    }

    return (
        <tr key={task ? task.id : null}>
            <td>
                <input type='checkbox' checked={task ? task.completed : true} style={{marginRight: 0}} onClick={() => changeStatus(task)}></input>
            </td>
            <td>
            {task ? (
                    editing ? ( 
                        <Input title='Todo title' updateTitle={updateTitle} value={title}/>
                    ) : (
                       task.title
                    )
                ) : (
                    'Name'
                )}
            </td>
            <td>
               {task ? <Button color={task.completed ? "green" : "red"} title={task.completed ? "Completed" : "Pending"}/> : 'Status'}
               
            </td>
            <td>
           
            {task ? (
                    editing ? ( 
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <Button title='Save' color='green' width='60px'  action={() => editTask(task)} />
                        <Button color='red' title='Delete' width='60px' action={() => deleteTask(task)} />
                    </div>
                    ) : (
                        <div style={{ display: 'flex', gap: '5px' }}>
                        <Button title='Edit' width='60px' action={() => editTask(task)} />
                        <Button color='red' title='Delete' width='60px' action={() => deleteTask(task)} />
                    </div>
                    )
                ) : (
                    'Action'
                )}
             
            </td>
        </tr>
    );
}

export default Row;

