import Badge from 'react-bootstrap/Badge';
import React, {useState} from 'react';
import Box from './AssetRadar2';
import Alerts from './Alerts';
import './App.css';
import { useEffect } from "react";
import {ApiFunc} from './API/Apifunc';
import DeploymentStatus from './DeploymentStatus';
import OnlineAsset from './OnlineAsset';
import Navbar from './Navbar';
import { MdCircle } from 'react-icons/md';


function AssetRadar() {

  const [AssetData, setAssetData] = useState([])
  const payload={
    "custId":50
  }

  const getAssetData = () => {
    
    ApiFunc.post('/RamGetAlertCount', payload)
    
          .then((res) => {
            setAssetData(res.data)
          })
  }         
  useEffect(() => {
    let interval
    getAssetData();
    interval = setInterval(() => {
      getAssetData()
    }, 10000)
  },[]) 

 
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
      //  toggle shown state
      setShown(false)
      setDiploymentStatus(false)
      setOnlineasset(false) 
      setIsShown(true)
      //setIsShown(current => !current); 
    
    };
    const [Shown, setShown] = useState(false);

    const ShowAlert = () => {
      //  toggle shown state
      setIsShown(false)
      setDiploymentStatus(false)
      setOnlineasset(false) 
      setShown(true)

     // setShown(current => !current);  
    };

    const [DiploymentStatus, setDiploymentStatus] = useState(false);

    const ShowDiploymentStatus = () => {
      //  toggle shown state
      setShown(false)
      setIsShown(false) 
      setOnlineasset(false)     
      setDiploymentStatus(true)
      //setDiploymentStatus(current => !current);
  
    };

    const [Onlineasset, setOnlineasset] = useState(false);

    const ShowOnlineasset = () => {
      //  toggle shown state
      setIsShown(false)
      setDiploymentStatus(false)
      setShown(false)
      setOnlineasset(true)

     // setShown(current => !current);  
    };

  

    return (
      <div >
        <Navbar title="Dashboard"/>
   <br/>
        {AssetData.map((post)=>{
          const {TotalAssetCount,assetUtilCount,idleAssetCount, DeploymentCount,InstalledCount,NotInstalledCount,AlertAssetCount,AlertRedCount,AlertAmberCount}=post;
          return(
            
    <div className="Cards text-center" style={{marginLeft:10}}>     
    <div class="row">
  <div class="col-sm-2">
    <div class="card shadow-sm" style={{borderBottomColor:'blue', borderBottomWidth:3}}>
      <div class="card-body" >
   <Badge>  
 {/*} <LocalShippingIcon color="primary"/>*/} 
  <h5> <span style={{display:'inline-flex'}}></span>{' '}  
 {TotalAssetCount}  
  
   </h5>
  </Badge>
  <div style={{float:'right', marginTop:-8}}>
    <div onClick={ShowOnlineasset}>
    <button style={{border:'none', backgroundColor:'white',fontSize:13}} >Online</button>
 {/*<span style={{fontSize:13,marginLeft:-5}}>Online</span> */}
 <MdCircle style={{color:'green', fontSize:13, marginRight:-5}}/>
  <span style={{fontSize:13,float:'right'}}>{assetUtilCount}</span></div>
 

 <div onClick={handleClick}>
 <button style={{fontSize:13, border:'none', backgroundColor:'white'}}>Offline</button> <MdCircle style={{color:'red',fontSize:13}}/>
 <span style={{fontSize:13}}>{idleAssetCount}</span>
</div>
</div>
  <hr style={{marginBottom:5,marginTop:15}}/>

  <span> Assets</span>
  
     {/*} <a href='/Shipments' style={{textDecoration:"none"}}>  <div class="card-footer h6 text-dark"style={{backgroundColor:'white'}} >
        Shipments
</div></a>*/}
      </div>
    </div>
  </div>


  <div class="col-sm-2"  >
    <div class="card shadow-sm" style={{borderBottomColor:'green', borderBottomWidth:3}}>
      <div class="card-body" >
      <Badge>  
 {/* <VibrationIcon color="primary" />*/}
  <h5> 
 {DeploymentCount}  
   </h5>
  </Badge>
  <div style={{float:'right', marginTop:-8}}>
    <div onClick={ShowDiploymentStatus}>
  <button style={{border:'none', backgroundColor:'white',fontSize:13}} > Installed</button>
  <MdCircle style={{color:'green', fontSize:13,marginRight:-10}}/>     
    
    <span style={{fontSize:13, float:'right'}}>{InstalledCount}</span>       
</div>
 
 <span style={{fontSize:13}}>Not Installed</span> <MdCircle style={{color:'red',fontSize:13, marginRight:10}}/>

    <span style={{fontSize:13}}>{NotInstalledCount}</span>
</div>

  <hr style={{marginBottom:5,marginTop:15}}/>
  <span >Deployment Status</span>

        {/*<a href='#' style={{textDecoration:"none"}}>  <div class="card-footer h6 text-dark" style={{backgroundColor:'white'}}>
        Vibration
</div></a>*/}
      </div>
     
    </div>
  </div>




  <div class="col-sm-2">
    <div class="card shadow-sm" style={{borderBottomColor:'red', borderBottomWidth:3}}>
      <div class="card-body " style={{backgroundColor:'white'}}  >
      <Badge>  
 {/* <GppBadIcon color="primary" />*/}
  <h5> 
  {AlertAssetCount }
   </h5>      
  </Badge>

  <div style={{float:'right', marginTop:-8}}>
  <MdCircle style={{color:'red', fontSize:13}}/>
    <span style={{fontSize:13,float:'right'}} >{AlertRedCount }</span>  
  <br/>
  <div style={{marginRight:-5}} onClick={ShowAlert}>  <MdCircle  style={{color:'yellow',fontSize:13}}/>   
    <button style={{border:'none', backgroundColor:'white',fontSize:13}}>{AlertAmberCount}</button>
</div>
 </div>
  <hr style={{marginBottom:5,marginTop:15}}/>
  <span> Active Alerts</span>
  
       {/* <a href='#' style={{textDecoration:"none"}}>  <div class="card-footer h6 text-dark" style={{backgroundColor:'white'}}>
        Unreachable
</div></a>*/}
      </div>
    </div>
  </div>  
  </div> 
  </div>  )})}
           
      <br/>{isShown && <Box />}    {Shown && <Alerts />}  {DiploymentStatus && <DeploymentStatus/>}  {Onlineasset && <OnlineAsset/>}
    <div style={{height:320}}>
     
    </div>
        </div>
    );
}
export default AssetRadar;

