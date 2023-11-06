import { createContext, useContext, useEffect, useState } from "react";
import { ApiFunc } from "../API/Apifunc";
import AlertContext from '../AlertContext'
const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const { setCustomAlert } = useContext(AlertContext);
  const [customers, setCustomers] = useState([]);
  const [editCustomer, setEditCustomer] = useState({
    customer: {},
    editable: false,
  });

 
  const getCustomers = async () => {
    try {
      let Customers = await ApiFunc.post(`/displayCustomer`);
      //console.log("Get Customers: ", Customers.data.body);
      setCustomers(Customers.data.body);
    } catch (error) {
      //console.log("Error Getting Customers: ", error);
    }
  };


  const addCustomer = async (payload) => {
    try {
      let response = await ApiFunc.post(`/addCustomer`, payload);
      console.log("Added New Customer : ", response);
      getCustomers();
      setCustomAlert(
        "success",
        "Customer Added Successfully. A new card will load in a while"
      );
    } catch (error) {
      console.log("Error Adding Customer: ", error);
      setCustomAlert(
        "error",
        error.response.data.body ? error.response.data.body : "Server Error"
      );
      getCustomers();
    }
  };

  const editCustomerApiFn = async (payload) => {
    try {
      let response = await ApiFunc.put(`/editCustomer`, payload);
      getCustomers();
      setCustomAlert("success", "Customer Edited Successfully!");
    } catch (error) {
      setCustomAlert(
        "error",
        error.response.data.body
          ? error.response.data.body
          : "Server Error: Unable to Edit this Customer. Contact System supervisor if the issue persists"
      );
      getCustomers();
    }
  };

  const deleteCustomer = async (customerName) => {
    // Sample Payload => {"customerName":"Wipro"}
    try {
      let payload = { customerName: customerName };
      let stations = await ApiFunc.delete(`/deleteCustomer`, payload);
      //console.log("Response Delete Customer: ", stations);
      // setStations(Response)
      setCustomAlert("success", "Customer Deleted Successfully!");
    } catch (error) {
      console.log("Error Deleting Station: ", error);
      setCustomAlert(
        "error",
        error.response.data.body
          ? error.response.data.body
          : `Unable to Delete Customer. Contact System Admin if the issue persists.`
      );
    }
  };


  return (
    <CustomerContext.Provider
      value={{
        customers,
        addCustomer,
        getCustomers,
        editCustomerApiFn,
        setEditCustomer,
        deleteCustomer,
       
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContext;
