import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequiredAuth = ({children}) => {
 const isAuth = useSelector((state) => state.auth.isAuth)

 
    if(!isAuth){
        return <Navigate to="/login">
              
        </Navigate>
    }


  return children;
}

export default RequiredAuth