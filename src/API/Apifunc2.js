
import axios from "axios";
const BaseUrl = "https://assetradar-sw-funapp.azurewebsites.net/api"; //Dev
//const BaseUrl = "https://assetradar-sw-apim.azure-api.net/AssetRadar-Sw-funapp";

export const Apifunc2 = axios.create({
  baseURL: BaseUrl,
  headers: {    
    "Ocp-Apim-Subscription-Key":"83401e27-fc35-473f-9c71-382e43d59f6c" 
  },
}); 

