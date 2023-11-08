
import axios from "axios";
//const BaseUrl = "https://assetradar-sw-funapp.azurewebsites.net/api"; //Dev
const BaseUrl = "https://assetradar-sw-apim.azure-api.net/AssetRadar-Sw-funapp";

export const ApiFunc = axios.create({
  baseURL: BaseUrl,
  headers: {
    
    "Ocp-Apim-Subscription-Key":"######################" 
  },
}); 

