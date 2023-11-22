import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MdSignalCellular3Bar } from "react-icons/md";
import Tabs from './Tabs';
import Calldata from './API/Calldata';
import {ApiFunc} from './API/Apifunc';
import './App.css';

var newAssetid
function Box() {
  const [DeviceData, setDeviceData] = useState([])
 
    const [show, setShow] = React.useState(false);

    const handleClickShow = (ASSET_ID) => {
      setShow(true);  
      const payload1={
        "custId":50,
         "ASSET_ID": ASSET_ID
      }
    getDeviceData(payload1)   
   
    localStorage.setItem("assetid", ASSET_ID)
    };  
    //console.log('assetid',localStorage.getItem("assetid"))
     newAssetid=localStorage.getItem("assetid")
     
    const handleClose = () => {
      setShow(false);
    };
    
  const [AssetData, setAssetData] = useState([])
  const payload={
    "custId":50,
    DeviceStatus:"Offline"
  }
  const getAssetData = () => {    
    ApiFunc.post('/DisplayAssetStatus', payload)    
          .then((res) => {
            setAssetData(res.data)
          })
  }         
  useEffect(() => {
    getAssetData();
  },[]) 

  const getDeviceData = (payload1) => {    
    ApiFunc.post('/getParticularDeviceData', payload1)    
          .then((res) => {
            setDeviceData(res.data)
          })
  }         
 // useEffect(() => {
 //   getDeviceData();
 // },[]) 
 
    return (
        <div>
           
      <div className='Cards'>
          <div class="row">
      <div class="col-sm-3">
      <div class="card shadow-sm">
      <div class="card-body" style={{height: "100%",
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },}} >
       
        <div style={{display:'flex'}}>
        <h4 style={{marginRight:8}}>Offline Assets :</h4>
        <h4> <Calldata/></h4>
        </div>

        <div class="overflow-auto" style={{maxHeight:300}} >
        {AssetData.map((post)=>{
          const {ASSET_ID,Index}=post;
          return(
            <div className="card" >
              <div class="card-body" style={{fontSize:15}}>
              <label key={Index} onClick={() => handleClickShow(ASSET_ID)}>{ASSET_ID}</label>            
    {/* <table className="table table-striped" style={{fontSize:15, Height:200}}>        
     <tbody>                
                    <tr>
                        <td onClick={() => handleClickOpen(ASSET_ID)}>{ASSET_ID}</td>                        
                    </tr>            
            </tbody>
          </table>*/}</div>
            </div> 
             )}
        )}
            </div>

  </div></div></div></div>
       
      </div>
      <Modal
      size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}         
      >        <Modal.Header closeButton >
       </Modal.Header>
        <Modal.Body> 
          
        {DeviceData.map((post)=>{
          const {Frequency, RAM_AssetID, RAM_Assetname ,batteryConsumption,measure_interval,networkType,signalStrength, parameters  }=post;
          return(
        <div >
          
            <div style={{display:'flex',fontSize:13,fontWeight:'bold'}}>
            
                <div style={{marginRight:25}}>
   <label>Data Interval</label>
   <select class="form-select" value={Frequency}  style={{fontSize:12}} disabled>
  <option value="30">0.5hrs</option>
  <option value="60">1hr</option>
  <option value="120">2hrs</option>
  <option value="240">4hrs</option>
  <option value="480">8hrs</option>  
  <option value="720">12hrs</option>
  <option value="1440">24hrs</option>
</select>
</div>
  <div style={{marginRight:25}}>
  <label>Measuring Interval</label>
  <select class="form-select" value={measure_interval} style={{fontSize:12}} disabled>
  <option value="30">0.5hrs</option>
  <option value="60">1hr</option>
  <option value="120">2hrs</option>
  <option value="240">4hrs</option>
  <option value="480">8hrs</option>  
  <option value="720">12hrs</option>
  <option value="1440">24hrs</option> 
</select>
  </div>
  <div style={{marginRight:25}}>
    
    <label>Battery</label><br></br>
    <button style={{border:'none'}}>{batteryConsumption}%</button>
    
    </div>
    <div style={{marginRight:25}}>
<label>{RAM_AssetID}</label><br/>
<label style={{color:'orange'}}>{RAM_Assetname}</label>
        </div>
        <div style={{marginRight:25}} >
            <label>Network</label><br/>
            <select style={{border:'none'}} value={networkType} disabled><option value={0}>GSM</option> <option value={1}>NBIoT</option></select>
           
            </div>
            <div >
                <label>Signal</label><br/>
                <MdSignalCellular3Bar color='warning'/>

                </div>
</div>
<hr/>
<div style={{fontSize:14,fontWeight:'bold'}}>
<Tabs ekey="Overview" data={newAssetid}/> 

</div>
</div>  )}
        )}
          </Modal.Body>
      </Modal>
      </div>

    );
  }
  
export default Box;

