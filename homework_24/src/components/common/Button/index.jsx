import React from 'react';
import './style.sass'
function Button({title, action}) {
    return (
        <button onClick={(e) => action(e)}>{title}</button>
    );
}

export default Button;