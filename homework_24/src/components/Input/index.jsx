import React, {useRef} from 'react';
import './style.sass'

function Input({placeholder, type, action = () => {}}) {

    return (
        <input type={type} id="createName" placeholder={placeholder} onChange={(e) => action(e.target.value)} ></input>
    );
}

export default Input;