import React, {useEffect, useState }  from 'react'; 
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { MdSignalCellular3Bar } from 'react-icons/md';
import {ApiFunc} from './API/Apifunc';
import Tabs1 from './Tabs1';

function Alerts() {
  const [show, setShow] = React.useState(false);

  const handleClickShow = (RAM_AssetID) => {
    setShow(true);
    //console.log("alert3",RAM_AssetID)
    const payload1={
      "custId":50,
       "ASSET_ID": RAM_AssetID
    }

  getDeviceData(payload1)
  };

  const handleClose = () => {
    setShow(false);
  };

  const [AssetData, setAssetData] = useState([])
  const payload={
    RAM_Status:"Amber",
    custId:50    
  }
  const getAssetData = () => {    
    ApiFunc.post('/DisplayAlert', payload)    
          .then((res) => {
            setAssetData(res.data)
          })
  }         
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
 // useEffect(() => {
 //   getDeviceData();
 // },[]) 

    return (
      <div className='Cards'>
        <div class="row">
      <div class="col-sm-3">
      <div class="card shadow-sm">
      <div class="card-body" >        
      <div style={{display:'flex'}}>
        <h4 style={{marginRight:8}}>Active Amber Alerts :</h4>
        <h4 style={{float:'right'}}>3</h4>
        </div>
<div class="overflow-auto" style={{maxHeight:300}}>
{AssetData.map(data =>
        <table className="table table-striped " style={{fontSize:15}}>     
           <tbody>              
                    <tr>
                        <td onClick={() => handleClickShow(data.RAM_AssetID)}><strong>{data.RAM_AssetID}</strong><br/>
                        {data.RAM_Parameter} generated value of {data.totalalert} from the location {data.RAM_location}
                        </td>                        
                    </tr>               
            </tbody>
            </table> )}
            </div>
        
      </div>
      </div>
      </div>
      </div>
      <Modal
       size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
         <Modal.Header closeButton >
       </Modal.Header>        
       <Modal.Body>
         
        {DeviceData.map((post)=>{
          const {Frequency,RAM_AssetID,RAM_Assetname,batteryConsumption,measure_interval,networkType }=post;
          return(
        <div >
          
            <div style={{display:'flex',fontSize:13, fontWeight:'bold'}}>
            
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
        <div style={{marginRight:25}}>
            <label>Network</label><br/>
            <select style={{border:'none'}} value={networkType} disabled><option value={0}>GSM</option><option value={1}>NBIoT</option> </select>
            </div>
            <div >
                <label>Signal</label><br/>
                <MdSignalCellular3Bar color='warning'/>

                </div>
</div>
<hr/>
<div style={{fontSize:14,fontWeight:'bold'}}>
<Tabs1 data={RAM_AssetID}/> 

</div>
</div>)}
        )}
          </Modal.Body>
      </Modal>
      </div>
    );
  }
  export default Alerts;

