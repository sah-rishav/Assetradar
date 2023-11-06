import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssetRadar from './AssetRadar';
import Alert from './Alert';
import Login from './Page/Login';
import { AuthProvider } from "./AuthContext";
import { CustomerProvider } from "./Customers/CustomerContext";
import ChangePassword from "./auth-features/ChangePassword";
import { AlertProvider } from "./AlertContext";
import RequireAdminAuth from "./RequireAdminAuth";
import RequireAuth from "./RequireAuth";
import "@fontsource/poppins";
import Footer from './Footer';
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

function App() {
  const customer =sessionStorage.customer
  const role = sessionStorage.role
  const params=useParams() 
  return (

    <React.StrictMode>
      <Router>
        <AlertProvider>
          <AuthProvider>
            <CustomerProvider>
            <div >                     
                  <main >
                    <Alert />
                    <Routes>
                      <Route path="/" element={<Login />} />                    
                     
                     <Route
                        path="/AssetRadar"
                        element={
                          <RequireAuth>
                            <AssetRadar/>                            
                          </RequireAuth>
                          
                      }
                      />
       <Route path='/Settings' element={<RequireAdminAuth><Sidebar/></RequireAdminAuth>}/>               
      
                      <Route
                        path="/change-password"
                        element={
                          <RequireAuth>
                            <ChangePassword />
                          </RequireAuth>
                        }
                      />
                 
                      
                    </Routes>
                  </main>
                  <div className="d-flex justify-content-center" >
                  <Footer /></div>
                </div>
            </CustomerProvider>
            </AuthProvider>
        </AlertProvider>
      </Router>
    </React.StrictMode>
    
  );
}

export default App;
