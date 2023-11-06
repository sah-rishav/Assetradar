import React, {useEffect, useState }  from 'react'; 
import './App.css';
import {Apifunc2} from './API/Apifunc2';
import { ApiFunc } from './API/Apifunc';

function DeploymentStatus() {

  const [AssetData, setAssetData] = useState([])
  const payload={
    "custId":50,
    "DeploymentStatus": "Yes"
  }
  const getAssetData = () => {    
    Apifunc2.post('/DisplayAssetDeploymentStatus', payload)    
          .then((res) => {
            setAssetData(res.data)
          })
  }         
  useEffect(() => {
    getAssetData();
  },[]) 

  const [InAssetData, setInAssetData] = useState([])
  const payload1={
    "custId":50
  }

  const getInAssetData = () => {
    
    ApiFunc.post('/RamGetAlertCount', payload1)
    
          .then((res) => {
            setInAssetData(res.data)
          })
  }         
  useEffect(() => {   
    getInAssetData();   
  },[]) 

    return (
      <div className='Cards'>
        <div class="row">
      <div class="col-sm-3">
      <div class="card shadow-sm">
      <div class="card-body" >        
      <div style={{display:'flex'}}>
        <h4 style={{marginRight:8}}>Installed Asset :</h4>
        <h4 style={{float:'right'}}>  {InAssetData && InAssetData.map((data)=>(      
        <span>{data.InstalledCount}</span>     
      ))}</h4>
        </div>
        <div class="overflow-auto" style={{maxHeight:300}}>
        {AssetData.map((post)=>{
          const {assetId,assetName,location}=post;
          return(
        <table className="table table-striped " style={{fontSize:15}}>        
          <tbody>             
                    <tr>
                        <td><strong>{assetId} </strong>{<br/>}
                        {assetName} is located in {location}                     
                        </td>                        
                    </tr>              
            </tbody>
            </table>)})}
        </div>
        
      </div>
      </div>
      </div>
      </div>
      
      </div>
    );
  }
  export default DeploymentStatus;

