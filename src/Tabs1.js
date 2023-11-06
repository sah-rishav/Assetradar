import React,{useEffect,useState} from 'react'; 
import { Button } from 'react-bootstrap';
import { MdWarning } from 'react-icons/md';
import { MdCached } from 'react-icons/md';
import { MdInsertDriveFile } from 'react-icons/md';
import {ApiFunc} from './API/Apifunc';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function BasicDemo(props) {
  
  const [Shown, setShown] = useState(false);

  const ShowAlert = () => {
    //  toggle shown state
    setIsShown(false)
    setShown(true)
   // setShown(current => !current);

  };
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => {
    //  toggle shown state
    setIsShown(true)
    setShown(false)
   // setIsShown(current => !current);  
  };
  const [DeviceData, setDeviceData] = useState([])
  const payload1={
    "custId":50,
    "ASSET_ID":props.data
   // "ASSET_ID": AssetData.ASSET_ID
  }
  const getDeviceData = () => {    
    ApiFunc.post('/getParticularDeviceData', payload1)    
          .then((res) => {
            setDeviceData(res.data)
          })
  }         
  useEffect(() => {
    getDeviceData();
  },[]) 
  
  localStorage.setItem("assetid2", props.data)
    return (
      <div className="card">
          {DeviceData.map((post)=>{
          const {OTAName,OTAVersion,RAM_AssetID,RAM_Asset_Contact,RAM_SensorkitID,RAM_location  }=post;
          return(
            <Tabs
            defaultActiveKey="Alerts"
            id="justify-tab-example"
            className="mb-4"
            justify
            variant="pills"
          >
            <Tab eventKey="Overview" title="Overview">
            <div className='grid' style={{maxWidth:'70rem', display:'grid',gridTemplateColumns:'1fr 1fr ',gap:'1rem',marginLeft:10,fontWeight:'normal'}}>
                     
                     <label>Asset id</label>
                     <input type="text"  class="form-control" aria-describedby="nameHelp" defaultValue={RAM_AssetID} disabled /> 
                     
                     <label for="exampleInpuEmail1"> Sensor Kit</label>
                     <input type="text" defaultValue={RAM_SensorkitID} class="form-control" id="exampleInputEmailHelp" disabled />   
                     
                  
                     <label for="exampleInpuEmail1">Location</label>
                     <input type="text" class="form-control" id="exampleInputEmailHelp" defaultValue={RAM_location} disabled/>    
                 
                     <label for="exampleInpuEmail1">Contact</label>
                     <input type="text" class="form-control" id="exampleInputEmailHelp" defaultValue={RAM_Asset_Contact} disabled />    
                  
                     <label for="exampleInpuEmail1">Firmware Name</label>
                     <input type="text" class="form-control" id="exampleInputEmailHelp" defaultValue={OTAName} disabled />    
                  
                     <label for="exampleInpuEmail1">Firmware Version</label>
                     <input type="text" class="form-control" id="exampleInputEmailHelp" defaultValue={OTAVersion} disabled />    
                 
                   </div>
            </Tab>
            <Tab eventKey="Parameter" title="Parameter">
            <div style={{textAlign:'center'}}>
                          <Button class='btn btn btn-primary' onClick={handleClick} style={{marginRight:10}}>Level Sensor</Button>                    
                          <Button class='btn btn btn-primary' onClick={ShowAlert}>Temperature Sensor</Button> 
                          <div style={{float:'right'}}><MdCached color='blue' fontSize='1.6em' style={{margin:5}}/>< MdInsertDriveFile fontSize='1.6em' color='green'/></div>
                          </div>
                          {Shown && <TempSen1 />} 
                          {isShown && <LevelSen1 />} 
            </Tab>
            <Tab eventKey="Alerts" title="Alerts">
            <div style={{textAlign:'center'}}>
                          <Button class='btn btn btn-primary' onClick={handleClick} style={{marginRight:10}}>Level Sensor</Button>                    
                          <Button class='btn btn btn-primary' onClick={ShowAlert}>Temperature Sensor</Button> 
                          <div style={{float:'right'}}><MdCached color='blue' fontSize='1.6em' style={{margin:5}}/>< MdInsertDriveFile color='green' fontSize='1.6em'/></div>
                          </div>
                          {Shown && <TempSen />} 
                          {isShown && <LevelSen />} 
            </Tab>
              
          </Tabs>
            
            )}
            )}
        </div>
    )
}
function TempSen1() {
  const [SensorData, setSensorData] = useState([])
          const payload={
            ASSET_ID:localStorage.getItem("assetid2"),
            Mode:"recent",
            RAM_parameter:"tempSensor",
            custId:50,
            fromDate:"",
            toDate:""
           // "ASSET_ID": AssetData.ASSET_ID
          }
          const getSensorData = () => {    
            ApiFunc.post('/RAMGraphForInsight1', payload)    
                  .then((res) => {
                    setSensorData(res.data)
                  })
          }         
          useEffect(() => {
            getSensorData();
          },[]) 
        
  return (
    <div className="App">
      <table class="table table-bordered" style={{margin:5, backgroundColor:'white',fontWeight:'normal'}}>
    <thead style={{color:'white', backgroundColor:'#555555'}}>
      <tr>
       <th>Parameter</th>
       <th>Time</th>
        <th>Value in cm</th>
      </tr>
    </thead>
    {SensorData.map((post)=>{
                const{ TIME_STAMP,parameter,rawvalue}=post;
                return(
    <tbody>
      <tr>
      <td> {parameter} </td>
      <td>{TIME_STAMP}</td>
        <td>{rawvalue}</td>
      </tr>
     
    </tbody>
    )}
    )}
  </table>

      </div>
          );
        }

        function LevelSen1() {
          const [SensorData, setSensorData] = useState([])
          const payload={
            ASSET_ID:localStorage.getItem("assetid2"),
            Mode:"recent",
            RAM_parameter:"levelSensor",
            custId:50,
            fromDate:"",
            toDate:""
           // "ASSET_ID": AssetData.ASSET_ID
          }
          const getSensorData = () => {    
            ApiFunc.post('/RAMGraphForInsight1', payload)    
                  .then((res) => {
                    setSensorData(res.data)
                  })
          }         
          useEffect(() => {
            getSensorData();
          },[]) 
        
        

          return (
            <div className="App">
               
              <table class="table table-bordered" style={{margin:5, backgroundColor:'white',fontWeight:'normal'}}>
    <thead style={{color:'white', backgroundColor:'#555555'}}>
      <tr>
       <th>Parameter</th>
       <th>Time</th>
        <th>Value in cm</th>
      </tr>
    </thead>
    {SensorData.map((post)=>{
                const{ TIME_STAMP,parameter,rawvalue}=post;
                return(
    <tbody>
      <tr>
      <td> {parameter} </td>
      <td>{TIME_STAMP}</td>
        <td>{rawvalue}</td>
      </tr>
      
    </tbody> )}
               )}
  </table>
 

              </div>
              );
            }
  
            function TempSen() {
              const [SensorData, setSensorData] = useState([])
              const payload={
                ASSET_ID:localStorage.getItem("assetid2"),
                Mode:"recent",
                RAM_parameter:"tempSensor",
                custId:50,
                fromDate:"",
                toDate:""
               // "ASSET_ID": AssetData.ASSET_ID
              }
              const getSensorData = () => {    
                ApiFunc.post('/GetAlertV1', payload)    
                      .then((res) => {
                        setSensorData(res.data)
                      })
              }         
              useEffect(() => {
                getSensorData();
              },[]) 
            
              return (
                <div className="App">
                  <table class="table table-bordered" style={{margin:5, backgroundColor:'white',fontWeight:'normal'}}>
                <thead style={{color:'white', backgroundColor:'#555555'}}>
                  <tr>
                   <th>Parameter</th>
                   <th>Status</th>
                   <th>Time</th>
                    <th>Value in cm</th>
                  </tr>
                </thead>
                {SensorData.map((post)=>{
                const{ TIME_STAMP,parameter,rawvalue,RAM_Status}=post;
                return(
    <tbody>
      <tr>
      <td> {parameter} </td>
      <td><MdWarning color='yellow'/></td>
      <td>{TIME_STAMP}</td>
        <td>{rawvalue}</td>
                  </tr>
                  
                  
                </tbody> )}
               )}
              </table>
            
                  </div>
                      );
                    }
            
                    function LevelSen() {
                      const [SensorData, setSensorData] = useState([])
          const payload={
            ASSET_ID:localStorage.getItem("assetid2"),
            Mode:"recent",
            RAM_parameter:"levelSensor",
            custId:50,
            fromDate:"",
            toDate:""
           // "ASSET_ID": AssetData.ASSET_ID
          }
          const getSensorData = () => {    
            ApiFunc.post('/RAMGraphForInsight1', payload)    
                  .then((res) => {
                    setSensorData(res.data)
                  })
          }         
          useEffect(() => {
            getSensorData();
          },[]) 
                      return (
                        <div className="App">
                          <table class="table table-bordered" style={{margin:5, backgroundColor:'white',fontWeight:'normal'}}>
                <thead style={{color:'white', backgroundColor:'#555555'}}>
                  <tr>
                   <th>Parameter</th>
                   <th>Status</th>
                   <th>Time</th>
                    <th>Value in cm</th>
                  </tr>
                </thead>
                {SensorData.map((post)=>{
                const{ TIME_STAMP,parameter,rawvalue,RAM_Status}=post;
                return(
    <tbody>
      <tr>
      <td> {parameter} </td>
      <td>{RAM_Status}<MdWarning color='yellow'/></td>
      <td>{TIME_STAMP}</td>
        <td>{rawvalue}</td>
      
                  </tr>
                  
                </tbody>)}
                )}
              </table>
            
                          </div>
                          );
                        }