import { MdVisibility } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import './AssetTable.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditAsset from './EditAsset';
import {Apifunc2} from '../API/Apifunc2';
import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import '../App.css';

function AssetTable() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [Mopen, setMOpen] = React.useState(false);

    const handleClickMOpen = (RAM_AssetID) => {
      setMOpen(true);
      const AData={
           "custId":50,
           "RAM_AssetID":RAM_AssetID
         }
         deleteAssetData(AData)
      console.log("Assetid",RAM_AssetID)
    };
  
    const handleMClose = () => {
      setMOpen(false);
    };

    const deleteAssetData = (AData) => {    
 
      Apifunc2.post('/DeleteAsset', AData)    
            .then((res) => {
             getAssetData()
              //setUserData(res)
              console.log('del',res.data)
            })
    } 

    const [AssetData, setAssetData] = useState([])
    const payload={
      "custId":50
    }
    const getAssetData = () => {    
      Apifunc2.post('/GetAllAssets', payload)    
            .then((res) => {
              setAssetData(res.data)
            })
    }         
    useEffect(() => {
      getAssetData();
    },[]) 
  
    return (
        <div>
          
          
            <div>
        <MDBTable
      scrollY
      maxHeight="550px"
      class="table table-bordered"  style={{ fontSize:14, backgroundColor:'white',overflow:'scroll'}}>
    <MDBTableHead style={{backgroundColor:'#555555',color:'white', position:'sticky',top:0}}>
      <tr>
        <th> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
 
</div></th>
      <th>Asset ID</th>
       <th>Asset Name</th>
        <th>Installation</th>
        <th>Max value</th>
        <th>Link Sensor Kit</th>
        <th>Location</th>
        <th>Existing Firmware</th>
        <th>OTA</th>
        <th></th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
    <td></td>
        <td><form style={{width:90}}>
              <input class="form-control" type="search" placeholder="&#61442;" aria-label="Search"/> 
              
            </form></td>
            <td><form style={{width:90}}>
              <input class="form-control" type="search" placeholder="&#61442;" aria-label="Search"></input>
              
            </form></td>
            <td><form style={{width:90}}>
              <input class="form-control" type="search" placeholder="&#61442;" aria-label="Search"></input>
              
            </form></td>
            <td><form style={{width:90}}>
              <input class="form-control" type="search" placeholder="&#61442;" aria-label="Search"></input>
              
            </form></td>
            <td><form style={{width:90}}>
              <input class="form-control" type="search" placeholder="&#61442;   " aria-label="Search"></input>
              
            </form></td>
            <td><form style={{width:90}}>
              <input class="form-control" type="search" placeholder="&#61442;  " aria-label="Search"></input>
              
            </form></td>
            <td><form style={{width:90}}>
              <input class="form-control" type="search" placeholder="&#61442;   " aria-label="Search"></input>
              
            </form></td>
            <td><form style={{width:90}}>
              <input class="form-control" type="search" placeholder="&#61442;   " aria-label="Search"></input>
              
            </form></td>
            <td></td>
            
            </tr>
            {AssetData.map((post)=>{
          const {RAM_AssetID,RAM_SensorkitID, RAM_Assetname,RAM_location, MaxMeasurableValue,DeploymentStatus,OTAVersion,OTAStatus}=post;
          return( 


            <tr >
                <td><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
 
</div></td>

            
        <td> {RAM_AssetID} </td>
      <td>{RAM_Assetname}</td>
        <td>{DeploymentStatus}</td>
        <td>{MaxMeasurableValue}</td>
        <td>{RAM_SensorkitID}</td>
        <td>{RAM_location}</td>
        <td>{OTAVersion}</td>
        <td>{OTAStatus}</td>
        <td ><div style={{display:'flex'}}>
        <MdVisibility onClick={handleClickOpen} color="action"  sx={{ float:'right',fontSize: 15}}/>
        <EditAsset/>         
          <MdDelete color="action" onClick={() =>handleClickMOpen(RAM_AssetID)} sx={{ float:'right',fontSize: 15}}/>
          </div>
          </td>
      </tr>

)}
)}
     
    </MDBTableBody>
  </MDBTable>
   </div>
   <Modal
        show={Mopen}
        onHide={handleMClose}
        backdrop="static"
        keyboard={false}
      
      >
        <Modal.Header closeButton >
          <Modal.Title>Delete Asset</Modal.Title>
         </Modal.Header>
        <Modal.Body>
          <span>This particular Asset has been deleted!!!</span>
          </Modal.Body>
        <Modal.Footer>
               
          <Button class="btn btn-action"onClick={handleMClose} autoFocus>
            Ok
          </Button>
          </Modal.Footer>
      </Modal>

   <Modal
   
   show={open}
   onHide={handleClose}
   dialogClassName="modal-wh"
   backdrop="static"
        keyboard={false}
         >
        <Modal.Header closeButton>
          <Modal.Title>  Attributes
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div >
         <span style={{float:'right'}}><MdEdit color="action"   sx={{ fontSize: 20}}/>Edit</span> 
        <h6 style={{color:'blue'}}><strong>Programme</strong></h6>
          <form >

  <div style={{display:'flex'}}>
  <div class="form-group" style={{marginBottom:10, marginRight:40}} >
    <label for="exampleInpuEmail1">Project ID</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Programme</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div></div>

  <h6 style={{color:'blue'}}><strong>Site</strong></h6>


  <div style={{display:'flex'}}>
  <div class="form-group" style={{marginBottom:10, marginRight:40}} >
    <label for="exampleInpuEmail1">SLM id</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Date & Time</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div></div>

  <div style={{display:'flex'}}>
  <div class="form-group" style={{marginBottom:10, marginRight:40}} >
    <label for="exampleInpuEmail1">MH REF</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">SDAC/ Catchment</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div></div>
 
  <div style={{display:'flex'}}>
  <div class="form-group" style={{marginBottom:10, marginRight:40}} >
    <label for="exampleInpuEmail1">AOD</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Access</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div></div>

  <div style={{display:'flex'}}>
  <div class="form-group" style={{marginBottom:10, marginRight:40}} >
    <label for="exampleInpuEmail1">If access denied, Reason:</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Weather Condition</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div></div>

  <h6 style={{color:'blue'}}><strong>Contractor</strong></h6>

  <div style={{display:'flex'}}>
  <div class="form-group" style={{marginBottom:10, marginRight:40}} >
    <label for="exampleInpuEmail1">Project Ref</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Lead Name</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div></div>

  <div style={{display:'flex'}}>
  <div class="form-group" style={{marginBottom:10, marginRight:40}} >
    <label for="exampleInpuEmail1">Survey Assistant</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Contractor Type</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div></div>
</form>

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
export default AssetTable;