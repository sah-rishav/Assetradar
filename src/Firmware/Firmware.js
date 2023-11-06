import * as React from 'react';
import { MdDensityMedium } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import FirmwareCard from './FirmwareCard';
import Navbar2 from '../Page/Navbar2';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import FirmwareFileUpload from './FirmwareFileUpload';


function Firmware() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
       
            <div className="App">
 {/* <Navbar2 /> 
      <div class="Menu" style={{float:'left'}}>
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" ><div style={{display:'inline-flex'}}>
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">      
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
        <a href="Setting" class="nav-link text-dark" aria-current="page">
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
        <a href="Firmware" class="nav-link active text-light">
          <svg class="bi me-2" width="16" height="16"><a href="#people-circle"></a></svg>
          Firmware Manager
        </a>
      </li>
    </ul>
  

        </div>
        
    </div>*/}
      <div >
      <h5 style={{float:'left',marginLeft:15, marginTop:-50}}>Firmwares</h5>
      <button class="btn btn-primary " style={{float:'right',marginTop:-50 }} onClick={handleClickOpen}> <MdAdd color="primary"/>Add Firmware</button>
<div style={{marginTop:70}}>
<FirmwareCard/></div></div>

<Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title>Upload a new firmware</Modal.Title>
         </Modal.Header>
        
        <Modal.Body>
            
            <form >
  <div class="form-group" style={{marginBottom:10}}>
    
    <input type="text" class="form-control" aria-describedby="nameHelp" placeholder="OTA/Firmware Name"/> </div>
    <div class="form-group" style={{marginBottom:10}}>
    <input type="text" class="form-control" aria-describedby="nameHelp" placeholder="Version"/> </div>
    <div class="form-group" style={{marginBottom:10}}>
    <input type="text" class="form-control" style={{height:60}} aria-describedby="nameHelp" placeholder="Description"/>
    
  </div>
  <FirmwareFileUpload/>

  
</form>
         
</Modal.Body>
        <Modal.Footer>
        <Button class="btn btn-primary" onClick={handleClose} autoFocus>
            Save
          </Button>
          <Button class="btn btn-danger"onClick={handleClose} autoFocus>
            Close
          </Button>
       </Modal.Footer>
      </Modal>
      <div style={{height:200}}></div>
        </div>
            
            );
        }
        export default Firmware;