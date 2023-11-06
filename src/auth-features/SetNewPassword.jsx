import { useState, useEffect } from "react";
import { usePasswordValidation } from "../../hooks/usePaswordValidation";
import { FaUserAlt, FaCheckCircle, FaMinusCircle, FaArrowLeft } from "react-icons/fa"
import { useAuth } from "../context/Auth/AuthContext";

const SetNewPassword = () => {
    const [currentPassword, setCurrentPassword] = useState("")

    const [password, setPassword] = useState({
        firstPassword: "",
        secondPassword: "",
    });
    const auth = useAuth()

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

            "defaultPassword": currentPassword,

            "newPassword": password.secondPassword
        }
        console.log("Payload: ", payload)
        auth.createNewPassword(payload)
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
    return (


        <div className="relative">
            <div className="card bg-gray-100 flex w-1/2 max-w-sm mx-auto shadow-2xl border-2">

                <div className="bg-gray-700 text-white font-semibold uppercase p-3 text-center rounded">SET NEW PASSWORD</div>

                <div className="p-1">
                    <form className="mx-2">
                        <div className="form-control w-full  ">
                            <div className="text-sm mx-auto mt-2  badge bg-gray-300 border-none text-black p-3"> <FaUserAlt className="inline mr-2" />{sessionStorage.userName}</div>

                            <label className="label mt-2">
                                <span className="label-text font-semibold text-sm text-sky-900">Current Password</span>
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </label>
                            <input type="password" placeholder="Type Current Password here"
                                className="input input-info input-bordered w-full max-w-sm" onChange={handleCurrentPassword} />

                            <label className="label mt-2">
                                <span className="label-text font-semibold text-sm text-sky-900">New Password</span>
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </label>
                            <input type="password" placeholder="Type New Password here"
                                onChange={setFirst}
                                className="input input-info input-bordered w-full max-w-sm" />

                            <label className="label mt-2">
                                <span className="label-text font-semibold text-sm text-sky-900">Confirm New Password</span>
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </label>
                            <input type="password" placeholder="Type New Password again"
                                onChange={setSecond}
                                className="input input-info input-bordered w-full max-w-sm" />

                        </div>

                        <div className="flex flex-1 justify-end my-2">
                            <button className="btn btn-sm btn-primary bg-sky-700 border-none hover:bg-green-700" onClick={handleSubmit} type="submit" disabled={currentPassword === '' || !validLength || !hasNumber || !upperCase || !lowerCase || !specialChar || !match} >Confirm</button>
                        </div>
                    </form>

                    <div className="flex flex-1 justify-start mb-2">
                        <button className="btn btn-sm btn-ghost" onClick={auth.logout}>
                            <FaArrowLeft className="inline mr-1" />   Cancel
                        </button>
                    </div>
                </div>

            </div>

            <div className="passwordValidation md:absolute md:right-0 md:top-0 bg-sky-100  shadow-lg rounded-xl p-2 text-sm">
                <div className="text-center underline font-semibold mb-4 uppercase">Password Policy</div>
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
        </div>
    )
}

export default SetNewPassword