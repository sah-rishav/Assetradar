import React from 'react'
//import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => { 
    // const auth = useAuth()
    // console.log(sessionStorage.userName)
    if(!sessionStorage.userName){
        return <Navigate to="/"/>
    }
  return children
}

export default RequireAuth