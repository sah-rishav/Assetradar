import React, { useState} from "react";
import { usePasswordValidation } from "../hooks/usePaswordValidation"
import { FaUserAlt, FaCheckCircle, FaMinusCircle, FaArrowLeft } from "react-icons/fa"
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";

const ChangePassword = () => { 
    const [currentPassword, setCurrentPassword] = useState("")

    const [password, setPassword] = useState({
        firstPassword: "",
        secondPassword: "",
    });
    const auth = useAuth()
    const navigate = useNavigate()

    const [
        validLength,
        hasNumber,
        upperCase,
        lowerCase,
        match,
        specialChar,
    ] = usePasswordValidation({
        firstPassword: password.firstPassword,
        secondPassword: password.secondPassword,
    });
    const setFirst = (event) => {
        setPassword({ ...password, firstPassword: event.target.value });
    };
    const setSecond = (event) => {
        setPassword({ ...password, secondPassword: event.target.value });
    };

    const handleCurrentPassword = (e) => {
        setCurrentPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let payload = {
            "userName": sessionStorage.getItem('userName'),
            "oldPassword": currentPassword,
            "newPassword": password.secondPassword
        }
        console.log("Payload: ", payload)
        auth.changePassword(payload)
    }

    const validityStyler = (condition) => {
        if (condition) {
            return {
                color: 'green'
            }
        } else {
            return {
                color: 'red'
            }
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   
  
    return (


        <div className="relative">            
            <br/>
            <h3 className="header d-flex justify-content-center">Change Password</h3>
            
            <div className="text-sm mx-auto mt-2 badge bg-gray-300 border-none text-black p-3" style={{float:'right'}}> <FaUserAlt className="inline mr-2" />{sessionStorage.userName}</div><br/>
                <div className="card-body d-flex justify-content-center" style={{width:'600'}} >               
                
                <div className="p-1">                    
                        <form>
                        <div className="form-group  ">
                            <label className="label" style={{float:'left'}}>
                                <span className="label-text font-semibold text-sm text-sky-900">Current Password</span>                                
                            </label>
                            <input type="password" placeholder="Type Current Password here"
                                className="input input-info input-bordered " style={{float:'right'}}onChange={handleCurrentPassword} />
                                 </div><br/><br/>
                            <div class="form-group">
                            <label className="label">
                                <span className="label-text font-semibold text-sm text-sky-900">New Password</span>
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </label>
                            <input type="password" placeholder="Type New Password here"
                                onChange={setFirst}
                                style={{float:'right'}}
                                className="input input-info input-bordered" />
                                </div><br/>
                                <div class="form-group">
                            <label className="label ">
                                <span className="label-text font-semibold text-sm text-sky-900">Confirm New Password</span>
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </label>
                            <input type="password" placeholder="Type New Password again"
                                onChange={setSecond}
                                style={{float:'right'}}
                                className="input input-info input-bordered " />
                                </div>    <br/>                                               
                                </form>
                        <div className="flex flex-1 justify-end my-2">
                            <button type="submit" disabled={currentPassword==='' || !validLength || !hasNumber || !upperCase || !lowerCase || !specialChar || !match} className="btn btn-sm btn-primary bg-sky-700 border-none hover:bg-green-700" onClick={handleSubmit}>Confirm</button>
                        </div>
                    

                    <div className="flex flex-1 justify-start mb-2">
                        <button className="btn btn-sm btn-ghost" onClick={()=>navigate(-1)}>
                            <FaArrowLeft className="inline mr-1" />   Cancel
                        </button>
                    </div>
                </div>

            </div>


            <Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
             <Modal.Header closeButton >
          <Modal.Title>Password Policy</Modal.Title>
         </Modal.Header>
        <Modal.Body>
        <div style={{width:500}}>  
        <ul>
                    <li>
                        <div className="text-xs mb-2" style={validityStyler(validLength)}>
                            {validLength ? <FaCheckCircle className="mr-1 text-green-700 inline" /> : <FaMinusCircle className="mr-1 text-red-600 inline" />}
                            The Password Should have atleast 8 characters</div>
                    </li>
                    <li>
                        <div className="text-xs mb-2" style={validityStyler(hasNumber)}>
                            {hasNumber ? <FaCheckCircle className="mr-1 text-green-700 inline" /> : <FaMinusCircle className="mr-1 text-red-600 inline" />}
                            The Password Should have atleast 1 number</div>
                    </li>
                    <li>
                        <div className="text-xs mb-2" style={validityStyler(upperCase)}>
                            {upperCase ? <FaCheckCircle className="mr-1 text-green-700 inline" /> : <FaMinusCircle className="mr-1 text-red-600 inline" />}
                            The Password Should have atleast 1 uppercase letter</div>
                    </li>
                    <li>
                        <div className="text-xs mb-2" style={validityStyler(lowerCase)}>
                            {lowerCase ? <FaCheckCircle className="mr-1 text-green-700 inline" /> : <FaMinusCircle className="mr-1 text-red-600 inline" />}
                            The Password Should have atleast 1 lowercase</div>
                    </li>
                    <li>
                        <div className="text-xs mb-2" style={validityStyler(specialChar)}>
                            {specialChar ? <FaCheckCircle className="mr-1 text-green-700 inline" /> : <FaMinusCircle className="mr-1 text-red-600 inline" />}
                            The Password Should have atleast 1 special character</div>
                    </li>
                    <li>
                        <div className="text-xs mb-2" style={validityStyler(match)}>
                            {match ? <FaCheckCircle className="mr-1 text-green-700 inline" /> : <FaMinusCircle className="mr-1 text-red-600 inline" />}
                            New Password and Confirm Password {!match ? 'Do Not' : ''} Match</div>
                    </li>

                </ul>
</div>
</Modal.Body>
        <Modal.Footer>
        
          <Button class="btn btn-danger"onClick={handleClose} autoFocus>
            Close
          </Button>
        </Modal.Footer>
      </Modal>     

            <div className="passwordValidation md:absolute md:right-0 md:top-0 bg-sky-100  shadow-lg rounded-xl p-2 text-sm">
                <div className="text-center underline font-semibold mb-4 uppercase" onClick={handleClickOpen}><a href="#">Password Policy</a></div>
              
            </div>
        </div>
    )
}

export default ChangePassword