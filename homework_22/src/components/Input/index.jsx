import React from 'react';
import classes from './Input.module.sass'

export function Input(props) {
    return (
        <input placeholder={props.title} className={classes.input} onChange={props.onChange} value={props.value}></input>
    );
}

export default Input;