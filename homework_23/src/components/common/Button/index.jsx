import React from 'react';
import classes from './styles.module.sass'


function Button({title, color = 'blue', width, borderRadius = '5px', action = () => {}}) {
    return (
       <button style={{background: color, width: width, borderRadius: borderRadius}} onClick={action}>{title}</button>
    )
}

export default Button;