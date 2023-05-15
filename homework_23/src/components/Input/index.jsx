import React from 'react';
import clasess from './style.module.sass'
function Input({title, updateTitle, value}) {
    return (
        <input type='text' placeholder={title} value={value} onChange={(e) => updateTitle(e.target.value)}></input>
    );
}

export default Input;