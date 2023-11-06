import { MdAdd } from 'react-icons/md';
import {MdDelete} from 'react-icons/md';
import {FaHistory} from 'react-icons/fa';
import {MdDensityMedium} from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Navbar2 from '../Page/Navbar2';
import * as React from 'react';
import AssetTable from './AssetTable';
import AssetImgUpload from './AssetImgUpload';

function AssetManager() {

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
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">      
      <span class="fs-4">MENU</span>
    </a>
        <MdDensityMedium color="primary"/>
        </div>
        
    <hr></hr>
    <ul class="nav nav-pills flex-column mb-auto">
      

      <li>
        <a href="/AssetRadar" class="nav-link text-dark">
          Dashboard
        </a>
      </li>
      <li>
        <a href="Setting" class="nav-link text-dark" aria-current="page">
           Manage User
        </a>
      </li>
      <li>
        <a href="DeviceMan" class="nav-link text-dark">
          Device Manager
        </a>
      </li>
      <li>
        <a href="AssetManager" class="nav-link active text-light">
          Asset Manager
        </a>
      </li>
      <li>
        <a href="Firmware" class="nav-link text-dark">
          Firmware Manager
        </a>
      </li>
    </ul>
  

        </div>
        
      </div>*/}<br></br>
      <div >
      <h5 style={{float:'left',marginLeft:15}}>Movable/ Non Movable Assets</h5>
      <div style={{float:'right'}}>
      <button class="btn btn-success "  ><FaHistory color="success"/> Update Firmware</button>{' '}
      <button class="btn btn-primary"  onClick={handleClickOpen}><MdAdd color="primary"/> Add Asset</button>{' '}
      <button class="btn btn-danger "  ><MdDelete color="warning"/> Delete Asset</button>
      
      </div><br/><br/>
    <AssetTable/>
    </div>

    <Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
             <Modal.Header closeButton >
          <Modal.Title>Add Asset</Modal.Title>
         </Modal.Header>
        <Modal.Body>        
            <form >
  <div class="form-group" style={{marginBottom:10,display:'flex'}}>
    <div>
    <label>Asset id</label>
    <input type="text"  class="form-control" aria-describedby="nameHelp" /> 
    </div>
    <div style={{marginLeft:'100px'}}>
    <label for="exampleInpuEmail1">Link Sensor Kit</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />   
    </div>
    
     </div>
    <div style={{display:'inline-flex'}}>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Asset Name</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div>
  <div class="form-group" style={{marginLeft:'100px'}} >
    <label for="exampleInpuEmail1">Asset Contact</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div></div>

  <div style={{display:'inline-flex'}}>  
  <div>
<span style={{fontSize:15}}><strong>Deployment Status</strong></span><br></br>
<span style={{fontSize:13}}> Installed</span>
<div style={{display:'flex', fontSize:14}}>
<div class="form-check" style={{marginRight:5}}>
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" checked  />
  <label class="form-check-label" for="flexRadioDisabled">
    Yes
  </label>
</div>
<div class="form-check" style={{marginLeft:5}}>
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled"   />
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    No
  </label>
</div></div></div>
<div style={{marginLeft:50}}>
<span style={{fontSize:15}}><strong>Max value in cm</strong></span>
<input type="text" style={{width:70}} class="form-control" id="exampleInputEmailHelp" />
</div>
<div >
<AssetImgUpload/></div>
  </div>

  <button class="btn btn btn-primary" style={{fontSize:15}}>Add Attribute</button><br/>
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

      </div>
     
      
    
    );
}

export default AssetManager;