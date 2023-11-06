import React, { useContext } from 'react'
// import { useAuth } from './context/Auth/AuthContext'
import { Navigate } from 'react-router-dom'
// import AlertContext from './context/Alerts/AlertContext'


const RequireAdminAuth = ({children}) => { 
    // const {setCustomAlert} = useContext(AlertContext)
    // const auth = useAuth()
    // console.log("Admin Auth",auth)
    if( sessionStorage.role!=='supervisor'){
        // setCustomAlert('error','You are not authorized to view this page. Contact Admin for more information.')
        return <Navigate to={`/AssetRadar`}/>
    }
  return children
}

export default RequireAdminAuth