import React, { useContext } from 'react'
import { FaExclamationCircle, FaCheckCircle, FaInfoCircle, FaTimes } from 'react-icons/fa'
import AlertContext from './AlertContext'

const Alert = () => {
    const { alert, setCustomAlert,setAlert } = useContext(AlertContext)
    const alertStyle = (type) => {
        switch (type) {
            case 'success': {
                return {
                    background: '#4E944F'
                }
            }; case 'error': {
                return {
                    background: '#990000'
                }
            };
            default: {
                return {
                    background: '#1572A1'
                }
            }
        }
    }
    return (

        <>
            {alert && (
                <div className="absolute aboveall p-4 top-14 right-10  rounded-lg shadow-2xl flex justify-start w-1/4" style={alertStyle(alert.type)}>
                    <div className="icon flex items-center justify-center mr-4">

                        {alert.type === 'error' && (
                            <FaExclamationCircle className="text-5xl text-white" />
                        )
                        }

                        {alert.type === 'success' && (
                            <FaCheckCircle className="text-5xl text-white" />
                        )}
                        {alert.type === 'info' && (
                            <FaInfoCircle className="text-5xl text-white" />
                        )}
                    </div>
                    <div className="message  flex items-center justify-center text-sm text-white text-justify">
                        <div className="text-left">
                            {alert.message}

                        </div>
                    </div>
                    <FaTimes className='text-white absolute top-2 right-2'onClick={()=>setAlert(null)}/>

                </div>
            )}
        </>
    )
}

export default Alert