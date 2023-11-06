import React, { useEffect, useState } from "react";
import {ApiFunc} from './Apifunc';

function Calldata() { 
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
    getAssetData();
  },[]) 

  return (
    <div className="App">
     
      {AssetData && AssetData.map((data)=>(      
        <span>{data.idleAssetCount}</span>     
      ))}

    </div>
  );

      }
export default Calldata;

