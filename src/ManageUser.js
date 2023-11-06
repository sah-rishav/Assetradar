import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdVisibility } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';
import { MdDensityMedium } from 'react-icons/md';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {ApiFunc} from './API/Apifunc';
import React, { useEffect, useState } from "react";
import Navbar2 from './Page/Navbar2';
import AlertContext from "./AlertContext";
import {useContext} from 'react';

function Settings() {
  const { setCustomAlert } = useContext(AlertContext);
  const data = {
    FirstName:'',
    UserID:'',
    Role:'',
    Mail:'',
    custId:50
  };
  const [inputData, setInputData]=useState(data)

  const handleData=(event)=>{
    setInputData({...inputData,[event.target.name]:event.target.value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    ApiFunc.post('./CreateUser',inputData)
    .then((res)=>{
console.log(res)
getAssetData()
setCustomAlert("success", "New user added successfully!!!");
    })
    .catch(err=>console.log(err))
  }

  const [Mopen, setMOpen] = React.useState(false);

  const handleClickMOpen = (UserID) => {
    setMOpen(true);
    const UData={
         "custId":50,
         "UserID":UserID
       }
       deleteUserData(UData)
    console.log("userid",UserID)
  };

  const handleMClose = () => {
    setMOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = (UserID,Mail,FirstName,Role) => {
    setOpen1(true);
    //console.log("usertest",UserID,Mail,FirstName,Role)
    localStorage.setItem("UserId", UserID)
    localStorage.setItem("Mail",Mail)
    localStorage.setItem("FirstName",FirstName)
    localStorage.setItem("Role",Role)
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [AssetData, setAssetData] = useState([])
  const payload={
    "custId":50
  }
  const getAssetData = () => {    
    ApiFunc.post('/DisplayUser', payload)    
          .then((res) => {
            setAssetData(res.data)
          })
  }         
  useEffect(() => {
    let interval
    getAssetData();
    //interval = setInterval(() => {
    //  getAssetData()
    //}, 10000)
  },[]) 

 //const [UserData, setUserData] = useState([])
 
 const deleteUserData = (UData) => {    
 
   ApiFunc.post('/deleteUser', UData)    
         .then((res) => {
          getAssetData()
           //setUserData(res)
           console.log('del',res.data)
         })
 }         
 // useEffect(() => {  
 //   deleteUserData();    
 // },[]) 

  
    return (
<div className="App">
  {/*
    <Navbar2/>    
      <div class="Menu" style={{float:'left'}}>
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" ><div style={{display:'inline-flex'}}>
        <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">      
      <span class="fs-4">MENU</span>
    </a>
        <MdDensityMedium color="primary"/>
        </div>
        
    <hr></hr>
    <ul class="nav nav-pills flex-column mb-auto">
      

      <li>
        <a href="/AssetRadar" class="nav-link text-dark">
          <svg class="bi me-2" width="16" height="16"><a href="/"></a></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="Setting" class="nav-link active text-light" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><a href="#table"></a></svg>
           Manage User
        </a>
      </li>
      <li>
        <a href="DeviceMan" class="nav-link text-dark">
          <svg class="bi me-2" width="16" height="16"><a href="#grid"></a></svg>
          Device Manager
        </a>
      </li>
      <li>
        <a href="AssetManager" class="nav-link text-dark">
          <svg class="bi me-2" width="16" height="16"><a href="#people-circle"></a></svg>
          Asset Manager
        </a>
      </li>
      <li>
        <a href="Firmware" class="nav-link text-dark">
          <svg class="bi me-2" width="16" height="16"><a href="#people-circle"></a></svg>
          Firmware Manager
        </a>
      </li>
    </ul>
  

        </div>
        
      </div>*/}<br></br>
      
      <h4 style={{float:'left',marginLeft:15}}>Manage Users</h4>
      <button class="btn btn-primary " style={{float:'right'}} onClick={handleClickOpen}><MdAdd color="Action"/> Add User</button>
      <br></br><br/>
      
      <div className='grid' style={{maxWidth:'70rem', display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'1.6rem'}}>
        {AssetData.map((post)=>{
          const {FirstName, LastName, Mail ,Role, UserID, Index}=post;
          return(
            <div className='card' key={Index} style={{border:'1px'}}>
              
        <div class="card shadow-sm">
          <div class="card-body" style={{backgroundColor:'#E3EEFF'}}>
          <div style={{float:'right'}}>
          <MdVisibility color="action" onClick={() =>handleClickOpen1(UserID,Mail,FirstName,Role)} sx={{ fontSize: 15}}/>
          <MdEdit color="action"   sx={{ fontSize: 15}}/>
          <MdDelete color="action" onClick={() =>handleClickMOpen(UserID)} sx={{ fontSize: 15}}/>          
          
</div>
          <br></br>
            <MdAccountCircle color='blue' fontSize='2.5em' />          
    
             <div class="card-footer h6 text-dark" style={{backgroundColor:'#E3EEFF'}}>         
                 
        <span>{FirstName} {LastName}</span>     
    
         
  </div>
  <p style={{fontSize:13}}> {Mail}</p>
  <p><small><strong>{Role}</strong></small></p>
          
        </div>
</div>
              </div>
          )}
        )}
      </div>
      <Modal
        show={Mopen}
        onHide={handleMClose}
        backdrop="static"
        keyboard={false}
      
      >
        <Modal.Header closeButton >
          <Modal.Title>Delete User</Modal.Title>
         </Modal.Header>
        <Modal.Body>
          <span>This particular user has been deleted!!!</span>
          </Modal.Body>
        <Modal.Footer>
               
          <Button class="btn btn-action"onClick={handleMClose} autoFocus>
            Ok
          </Button>
          </Modal.Footer>
      </Modal>

      <Modal
        show={open1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      
      >
        <Modal.Header closeButton >
          <Modal.Title>View User</Modal.Title>
         </Modal.Header>
        <Modal.Body>
                <form  >
  <div class="form-group" style={{marginBottom:10}}>
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text"  class="form-control" name='FirstName' defaultValue={localStorage.getItem("FirstName")} disabled/>
    
  </div>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">User id</label>
    <input type="text" class="form-control" name='UserID' defaultValue={localStorage.getItem("UserId")} disabled/>
    
  </div>
  <div class="form-group" style={{marginBottom:10}}>
  <label for="Role">Role</label>
  <select class="form-select" name='Role' value={localStorage.getItem("Role")} disabled>    
    <option value="supervisor">Supervisor</option>
    <option value="workforce">Workforce</option>
</select>            
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">User Email</label>
    <input type="Email" class="form-control" name='Mail' defaultValue={localStorage.getItem("Mail")}disabled />
    
  </div>
</form>


          </Modal.Body>
        <Modal.Footer>               
          <Button class="btn btn-action"onClick={handleClose1} autoFocus>
            Ok
          </Button>
          </Modal.Footer>
      </Modal>



      <Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        
        <Modal.Header closeButton >
          <Modal.Title>Add User</Modal.Title>
       </Modal.Header>
        <Modal.Body>
          
            
            <form onSubmit={handleSubmit} >
  <div class="form-group" style={{marginBottom:10}}>
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text"  class="form-control" name='FirstName' value={inputData.FirstName} required onChange={handleData} placeholder="Enter Name"/>
    
  </div>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">User id</label>
    <input type="text" class="form-control" name='UserID' value={inputData.UserID} onChange={handleData} required placeholder="Enter User ID"/>
    
  </div>
  <div class="form-group" style={{marginBottom:10}}>
  <label for="Role">Role</label>
  <select class="form-select" name='Role' onChange={handleData} value={inputData.Role} required>
    <option  >--Select Role--</option>
    <option value="supervisor">Supervisor</option>
    <option value="workforce">Workforce</option>
</select>            
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">User Email</label>
    <input type="Email" class="form-control" name='Mail' value={inputData.Mail} onChange={handleData} required placeholder="Enter Email ID"/>
    
  </div> <hr/>
  <Button class="btn btn-success" type='submit' onClick={handleClose} autoFocus>
            Save
          </Button>
          <Button class="btn btn-danger"  style={{float:'right'}} onClick={handleClose} autoFocus>
            Close
          </Button>
</form>
         
          </Modal.Body>
       
      </Modal>
      </div>
      
    
    );
}

export default Settings;