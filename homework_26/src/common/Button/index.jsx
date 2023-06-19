import React from 'react';
import { Button as MuiButton } from '@mui/material';

function Button({ title, action, type }) {
    const styles = {
        width: '200px',
        height: '40px',
        borderRadius: '20px',
        backgroundColor: 'rgb(169, 39, 39)',
        '&:hover': {
            backgroundColor: 'rgb(2, 126, 21)'
        }
    }

    return (
        <MuiButton variant="contained" sx={styles}  onClick={(e) => action(e)} type={type} disableRipple size='medium'>{title}</MuiButton>
    );
}

export default Button;