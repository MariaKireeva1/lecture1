import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({isAuth, children}) {

    if (!isAuth) {
       return <Navigate to='/login' />
    }

     return children
    
}

export default PrivateRoute;