import React from 'react';
import './style.sass'
import { Input as InputMui } from '@mui/material';


function Input({ placeholder, type, action = () => { } }) {
    return (
        <InputMui
            placeholder={placeholder}
            type={type}
            disableUnderline
            onChange={(e) => action(e.target.value)}
            inputProps={{
                sx: {
                    width: '600px',
                    height: '30px',
                    border: '1px solid grey',
                    marginBottom: '10px',
                    padding: '20px',
                    boxSizing: 'border-box',
                    borderRadius: '10px'
                }
            }} />
    );
}

export default Input;
