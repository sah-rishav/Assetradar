import { MdAdd, MdMenu } from 'react-icons/md';
//import Navbar2 from '../Page/Navbar2';
import Table from '../table';
import DeviManCard from './DeviManCard';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as React from 'react';

function DeviceMan() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

    return (
<div className="App">
   {/*
<Navbar2 /> 
     <div class="Menu" style={{float:'left'}}>
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" ><div style={{display:'inline-flex'}}>
        <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">      
      <span class="fs-4">MENU</span>
    </a>
        <MdMenu color="primary"/>
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
        <a href="DeviceMan" class="nav-link active text-light">
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
        
    </div>*/}
      <br></br>
      <div >
      <h4 style={{float:'left',marginLeft:15}}>Manage Device</h4>
      <button class="btn btn-primary " style={{float:'right'}}  onClick={handleClickOpen}><MdAdd color="Action"/> Add Device</button>
      <br></br><br></br>
      
    <DeviManCard/>
    </div>
      <Modal
       size='lg'
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
           <Modal.Header closeButton >
          <Modal.Title>Add Device</Modal.Title>
         </Modal.Header>
      
        <Modal.Body>
        <div >  
          <form >
  
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Sensor Kit ID</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" placeholder="Enter Sensor Kit ID"/>
    
  </div>
<p style={{fontSize:15, color:'navy'}}>* Sensor Parameter name should contain "_" </p>
  
</form>
<Table/>
</div>
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

      </div>
     
      
    
    );
}

export default DeviceMan;
