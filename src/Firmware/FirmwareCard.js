import { MdVisibility } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import settings from '../image/settings.png';
import { MdCalendarMonth } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {Apifunc2} from '../API/Apifunc2';
import React, { useEffect, useState } from "react";

function FirmwareCard() {

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   
    const [AssetData, setAssetData] = useState([])
    const payload={
      "custId":50
    }
    const getAssetData = () => {    
      Apifunc2.post('/GetAllOTAData', payload)    
            .then((res) => {
              setAssetData(res.data)
            })
    }         
    useEffect(() => {
      getAssetData();
    },[]) 
  
      return (
  <div className="App" >
    <div className='card col-sm-2 justify-content-center'>
        {AssetData.map((post)=>{
          const {OTAName,Version,LastUpdatedTime,Status, Index}=post;
          return(
            <div className='card text-center' key={Index} style={{border:'1px'}}>            
   
        <div class="card shadow-sm">
          <div class="card-body" style={{backgroundColor:'#E3EEFF'}}>
          <div style={{float:'right'}}>
          <MdVisibility color="action"  sx={{ fontSize: 15}} onClick={handleClickOpen}/>
          <MdEdit color="action"   sx={{ fontSize: 15}}/>
          <MdDelete color="action"  sx={{ fontSize: 15}}/>
          
         
</div>
          <br></br>
          <img src={settings} alt='Settings' style={{height:60, width:60}} />     <p></p>
          <span style={{fontSize:13}}> <strong>{OTAName}|V{Version}</strong></span>                      
          
    <p>  <button class="btn btn btn-success" style={{height:30,width:65, fontSize:12, borderRadius:40}} > {Status}</button></p>
         <MdCalendarMonth sx={{fontSize:14}}/ ><span style={{fontSize:12}}>{LastUpdatedTime}</span>
         
          </div>
         </div>
        </div>
  )}
          )}
     </div>
     
     <Modal
     size='lg'
        show={open}
        onHide={handleClose}
        aria-labelledby="alert-Modal-title"
        aria-describedby="alert-Modal-description"
      >
         <Modal.Header closeButton>
          <Modal.Title>  View Sensor kit
        </Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <div >  
          <form >
  
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Sensor Kit ID</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" placeholder="Enter Sensor Kit ID"/>
    
  </div>
<p style={{fontSize:15, color:'navy'}}>* Sensor Parameter name should contain "_" </p>
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
    <tbody>
    <tr>
        <td> Level Sensor </td>
      <td>cm</td>
        <td>0</td>
        <td>45</td>
        <td>45</td>
        <td>51</td>
        <td>51</td>
        <td>1000</td>
      </tr>
      <tr>
      <td> Temperature Sensor </td>
      <td>degre Celsius</td>
        <td>0</td>
        <td>45</td>
        <td>45</td>
        <td>51</td>
        <td>51</td>
        <td>1000</td>
      </tr>
      
     
    </tbody>
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
 
 export default FirmwareCard;