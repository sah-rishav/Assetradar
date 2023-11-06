import { MdVisibility } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import IC from '../image/IC.jpg'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

import {ApiFunc} from '../API/Apifunc';
import React, { useEffect, useState } from "react";

var sensorid
function DeviManCard() {

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = (RAM_SensorID) => {
      setOpen(true);
      sensorid=RAM_SensorID
      const payload1={
        "custId":50,
        "RAM_SensorID":RAM_SensorID
      }
      getSensorKitData(payload1)
    };
   
    const handleClose = () => {
      setOpen(false);
    };
    const [AssetData, setAssetData] = useState([])
  const payload={
    "custId":50
  }
  const getAssetData = () => {    
    ApiFunc.post('/DisplaySensorKitID', payload)    
          .then((res) => {
            setAssetData(res.data)
          })
  }         
  useEffect(() => {
    getAssetData();
  },[]) 


  const [SensorKitData, setSensorKitData] = useState([])

 
  const getSensorKitData = (payload1) => {    
    ApiFunc.post('/DisplaySensorKitParams', payload1)    
          .then((res) => {
            setSensorKitData(res.data)
          })
  }         


  
      return (
  <div className="App">
<div className='grid' style={{maxWidth:'70rem', display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr 1fr',gap:'1.6rem'}}>
        {AssetData.map((post)=>{
          const {RAM_SensorID, Index}=post;
          return(
            <div className='card' key={Index} style={{border:'1px'}}>
              
        <div class="card shadow-sm">
          <div class="card-body" style={{backgroundColor:'#E3EEFF'}}>
            <div style={{float:'right'}}>
            <MdVisibility color="action"  onClick={()=>handleClickOpen(RAM_SensorID)}/>
          <MdEdit color="action"   />         
          <MdDelete color="action"  />
</div>
          <br></br>
          <img src={IC} alt='sensor kit' style={{height:60, width:60}} />                                 
          <p style={{fontSize:13}}> Sensor Kit ID</p>{RAM_SensorID}
         

          </div>
          </div></div>
        )}
          )}
          </div>

  
     <Modal
     size='lg'
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
           <Modal.Header closeButton >
          <Modal.Title>View Sensor kit</Modal.Title>
         </Modal.Header>
     
        <Modal.Body>
        <div >   
          <form >
  
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Sensor Kit ID</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" defaultValue={sensorid} disabled/>
    
  </div>
<strong style={{fontSize:15}}>Define Sensor Parameter</strong> 
<table class="table table-bordered" style={{margin:5, fontSize:14}}>
    <thead style={{backgroundColor:'#555555',color:'white'}}>
      <tr>
      <th>Parameter name</th>
       <th>Unit</th>
        <th>R min</th>
        <th>R max</th>
        <th>A min</th>
        <th>A max</th>
        <th>G min</th>
        <th>G max</th>
      </tr>
    </thead>
    {SensorKitData.map((post)=>{
          const {RAM_A_MIN,RAM_A_MAX,RAM_G_MAX,RAM_G_MIN,RAM_R_MAX,RAM_R_MIN,RAM_parameter,RAM_unit}=post;
          return(
    <tbody>
    <tr>
        <td> {RAM_parameter} </td>
      <td>{RAM_unit}</td>
        <td>{RAM_R_MIN}</td>
        <td>{RAM_R_MAX}</td>
        <td>{RAM_A_MIN}</td>
        <td>{RAM_A_MAX}</td>
        <td>{RAM_G_MIN}</td>
        <td>{RAM_G_MAX}</td>
      </tr>     
     

     
    </tbody>)})}
  </table>
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
 
 export default DeviManCard;