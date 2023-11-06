import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { MdSignalCellular3Bar } from "react-icons/md";
import Tabs from './Tabs';
import {ApiFunc} from './API/Apifunc';
import './App.css';

var newAssetidd
function OnlineAsset() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (ASSET_ID) => {
      setOpen(true);
      const payload1={
        "custId":50,
         "ASSET_ID": ASSET_ID
      }
    getDeviceData(payload1)   
   
    localStorage.setItem("assetidd", ASSET_ID)    
    };  
    newAssetidd=localStorage.getItem("assetid")

    const handleClose = () => {
      setOpen(false);
    };
    
  const [AssetData, setAssetData] = useState([])
  const payload={
    "custId":50,
    DeviceStatus:"Online"
  }
  const getAssetData = () => {    
    ApiFunc.post('/DisplayAssetStatus', payload)    
          .then((res) => {
            setAssetData(res.data)
          })
  }       
  //console.log("test1",DeviceData.ASSET_ID)  
  useEffect(() => {
    getAssetData();
  },[]) 



  const [DeviceData, setDeviceData] = useState([])
 
    const getDeviceData = (payload1) => {    
    ApiFunc.post('/getParticularDeviceData', payload1)    
          .then((res) => {
            setDeviceData(res.data)
        })
    }         
  

 const [OnlineAssetData, setOnlineAssetData] = useState([])
  const payload2={
    "custId":50  }

  const getOnlineAssetData = () => {
        ApiFunc.post('/RamGetAlertCount', payload2)
    
          .then((res) => {
            setOnlineAssetData(res.data)
          })
  }         
  useEffect(() => {   
    getOnlineAssetData();
  },[]) 

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
        <h4 style={{marginRight:8}}>Online Assets :</h4>
        {OnlineAssetData.map((post)=>{
          const {assetUtilCount}=post;
          return(
        <h4> {assetUtilCount}</h4>)})}
        </div>

        <div class="overflow-auto" style={{maxHeight:300}}>

        {AssetData.map((post)=>{          
          const {ASSET_ID}=post;
          return(
            <div className="card">
              <div class="card-body" style={{fontSize:15}}>
              <label onClick={() => handleClickOpen(ASSET_ID)}>{ASSET_ID}</label>

  {/*  <table className="table table-striped" style={{fontSize:15, Height:200}}>        
  <tbody>                
                 <tr>
                     <td onClick={handleClickOpen}>{ASSET_ID}</td>                        
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
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}       
      >        
      <Modal.Header closeButton ></Modal.Header>
        <Modal.Body>         
          
        {DeviceData.map((post)=>{
          const {Frequency,RAM_AssetID, RAM_Assetname, batteryConsumption,measure_interval,networkType}=post;
          return(
        <div >        
            <div style={{display:'flex',fontSize:13,fontWeight:'bold'}}>
            
                <div style={{marginRight:15}}>
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
  <div style={{marginRight:15}}>
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
  <div style={{marginRight:15}}>
    
    <label>Battery</label><br></br>
    <button style={{border:'none'}}>{batteryConsumption}%</button>
    
    </div>
    <div style={{marginRight:15}}>
<label>{RAM_AssetID}</label><br/>
<label style={{color:'orange'}}>{RAM_Assetname}</label>
        </div>
        <div >
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
<Tabs data={newAssetidd}/> 

</div>
</div>  )}
        )}
          
        </Modal.Body>
      
      </Modal>
      </div>

    );
  }
  
export default OnlineAsset;

