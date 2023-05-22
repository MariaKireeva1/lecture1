import React from 'react';
import classes from './Button.module.sass'



export function Button(props) {
    return (
            <button className={classes.btn} style={{background: props.color, width: props.width}} onClick={props.onClick}>{props.title}</button>
    );
}

export default Button;