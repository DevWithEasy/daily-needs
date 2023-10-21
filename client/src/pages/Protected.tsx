import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({children} : React.PropsWithChildren) => {
    const isAuth = true
    return isAuth ? children : <Navigate to='/signin'/>
};

export default Protected;