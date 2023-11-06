import React from 'react'
import {  Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { MdShareLocation } from 'react-icons/md';
import { FaUserCircle } from "react-icons/fa";
import { MdSettings } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


const Navbar = ({ title }) => {
    const auth = useAuth();
    // console.log(auth)
    let role = auth.user ? auth.user.role : null;
    // console.log("Navbar Role: ", role)
    const nowrapStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',   
        maxWidth: '200px'
    }
    return (
        
        <div className="App" >
        <nav class="navbar navbar-expand-lg  navbar-light bg-light shadow-sm sticky" >
         <div class="container-fluid">
         <a class="navbar-brand h1" href="/AssetRadar"><MdShareLocation color="primary"/>
              Asset Radar
              </a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div >
     <span class="navbar-brand h1" style={{fontSize: 30 }}>Dashboard</span>
   </div>
   
           <div class="d-flex justify-content-end">
           
          {/*   <form style={{width:450}}>
               <input class="form-control" type="search" placeholder="&#61442;   Search" aria-label="Search" style={{borderRadius:10}}></input>
               
    </form>*/}
             
           </div>
 
           <div class="d-grid gap-1 d-md-flex justify-content-md-end">   
           

 {auth.user && (
     <>
         {/* User Icon and Drop down */}
         <Dropdown as={ButtonGroup} style={{marginTop:-10}}>
         <Button variant="none">
         <FaUserCircle color='blue' className='mr-1' /> 
 {auth.user && (<div className=" text-xs" title={auth.user.FirstName} 
     style={nowrapStyle}>{auth.user.FirstName} 
     </div>)} 
         </Button>
      <Dropdown.Toggle split variant="none" id="dropdown-split-basic" />
   
      <Dropdown.Menu>

        <Dropdown.Item > <Link to="/change-password">
                         <button className="btn btn-ghost btn-block btn-xs  hover:text-sky-700">Change Password</button>
                     </Link></Dropdown.Item>
        <Dropdown.Item > <button className="btn btn-ghost btn-block btn-xs  hover:text-red-600" onClick={auth.logout}>Logout</button></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       
     </>
 )}
 
     <div> 
     <a class="navbar-brand" href="/Settings">
     <MdSettings color="action" style={{marginLeft:4, marginTop:10}}/>        
              </a></div>
   </div>
         </div>
       </nav>
           
     </div>
    );
}


export default Navbar