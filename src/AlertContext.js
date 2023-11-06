import { createContext, useEffect, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  // alert ==> type and message
  const [alert, setAlert] = useState(null);
  
  const setCustomAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 8000);
  };

  return (
    <AlertContext.Provider value={{ alert, setCustomAlert,setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
