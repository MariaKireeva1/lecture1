import React, {useState} from 'react';
import Input from '../Input';
import Button from '../common/Button';
import classes from './style.module.sass'


function Form({addTask}) {

  const [title, setTitle] = useState('')

  const updateTitle = (value) => {
    setTitle(value)
  }

  const add = () => {
    addTask(title)
    setTitle('')
  } 
  
    return (
        <div className={classes.wrapper}>
            <Input title='Todo title' updateTitle={updateTitle} value={title}/>
            <Button title='Create Todo' action={add}/>
        </div>
    );
}

export default Form;