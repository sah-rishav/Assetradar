import { createContext, useContext, useState, useEffect } from "react";
import { ApiFunc } from "./API/Apifunc";
import { useNavigate } from "react-router-dom";
import AlertContext from "./AlertContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { setCustomAlert } = useContext(AlertContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [customer, setCustomer] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (sessionStorage.userName && sessionStorage.role) {
      setUser({
        userName: sessionStorage.userName,
        role: sessionStorage.role,
        customer: sessionStorage.customer,
        FirstName:sessionStorage.FirstName
      });
    } else {
      logout();
    }
  }, []);

  const login = async (user) => {
    // setUser(user); --> Set USer After Successful Login

    // Call API
    let loginRes = await ApiFunc.post(`/GetLoginResponse`, user);
    //console.log("Login Res Body:", loginRes.data.body);
    if (
      loginRes.data.Response === "Invalid User" ||
      loginRes.data.Response === "Invalid credentials"||
      loginRes.data.Status === "error"
    ) {
      navigate("/", { replace: true });
      setCustomAlert("error", "Invalid Username or Password");
    } else {
      // -> if New Password Required ==> Redirect to Change Password Page
      //  -->Change Password and Ask to Login Again
      if (loginRes.data.status === "New Password Required") {
        sessionStorage.setItem("userName", user.userName);
        // setCustomAlert("info", "Please create your new password");
        navigate("/set-new-password");
      } else {
        let customerRes =
          loginRes.data.Role === "supervisor" ? "All" : loginRes.data.body;
        let roleRes = loginRes.data.Role === "supervisor" ? "supervisor" : "Customer";

        //console.log("CustomerRes:", customerRes);
        //console.log("RoleRes:", roleRes);

        setCustomer(customerRes);
        setRole(roleRes);

        setUser({
          userName: user.userName,
          role: roleRes,
          customer: customerRes,
          FirstName:loginRes.data.FirstName
        });

        sessionStorage.setItem("userName", user.userName);
        sessionStorage.setItem("role", roleRes);
        sessionStorage.setItem("customer", customerRes);
        sessionStorage.setItem("FirstName",loginRes.data.FirstName);
       // setCustomAlert("success", "Logged In Successfully!");

        // Check Response
        
        if (loginRes.data.Role === "supervisor") {
          // -> User Customer --> Redirect to Stations Page -->Hide Customer PAge --> Hide Navlinks in Navbar

          navigate("/AssetRadar", { replace: true });
        } else {
          // -> User supervisor --> Redirect to Customers Page

          navigate(`/AssetRadar`, { replace: true });
        }
      }
    }
  };

 

  const changePassword = async (payload) => {
    const response = await ApiFunc.put("/changePassword", payload);
    if (response.data.body === "New password set") {
      setCustomAlert("info", "Your password was changed successfully!");
      navigate(-1); // routing back to previous page
    }else if(response.data.body==='Old Password not correct'){
      setCustomAlert("error","Old Password Is Not Correct!")
    }
  };

 

  const logout = () => {
    setUser(null);
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
