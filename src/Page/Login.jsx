import {  useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { MdShareLocation } from 'react-icons/md';

const Login = () => {
  const {
    register,
    trigger,
    formState: { errors, isDirty, isValid },
    handleSubmit
  } = useForm()

 
  const auth = useAuth()
  const navigate = useNavigate()


  const handleLogin = (data) => {

    if (data.Mail) {
      auth.login(data)
      // console.log(data)

    }

  }


  return (
    <div  >
     <a class="navbar-brand h1" href="/" style={{display:'flex', justifyContent:'center', fontSize:40}}><MdShareLocation color="primary" sx={{fontSize:40}}/>
              Asset Radar
              </a>
      <div class="card-body d-flex justify-content-center" style={{borderColor:'black'}}>

      

<Form onSubmit={handleSubmit(handleLogin)}
                      id= "login"
                      className="button" 
                      style={{ padding: "20px", width:"400px" }}
                    >
                      <Form.Group controlId="Header" className="space">
                        <h1 style={{ textAlign: "center" }}>Login</h1>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: 18 }}>
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          autoFocus
                          {...register("Mail", {
                            required: 'Email Is Required',
                            pattern: {
                              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: 'Enter a Valid Email'
                            }
                          })}
                          onFocus={() => trigger("Mail")}
              
                          onKeyUp={() => trigger("Mail")}
                          onBlur={() => trigger("Mail")}
                        />
                      {errors.Mail && (
            <div className="error bg-red-100 text-xs text-red-600 py-1 rounded m-1 px-2">
              {errors.Mail.message}
            </div>)}
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 18 }}>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          autoComplete='false'
            onKeyUp={() => trigger("Password")}
            onBlur={() => trigger("Password")}
            onFocus={() => trigger("Password")}

            {...register("Password", {
              required: 'Password Is Required'
            })}       />
                          {errors.Password && (
            <div className="error bg-red-100 text-xs text-red-600 py-1 rounded m-1 px-2">
              {errors.Password.message}
            </div>
          )}
                        
                      </Form.Group><br></br>

                      <Button
                        className="space"
                        block
                        type="submit"
                        style={{  width:"360px", backgroundColor: 'black', color:'white' }}
                        variant="secondary"                        
                        onClick={handleLogin}
                        disabled={!isDirty || !isValid}
                      >
                        Login
                      </Button>

                    </Form>
                    </div>
                  

{/* 

      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text font-semibold text-sm text-sky-900">Username</span>
            {/* <span className="label-text-alt">Alt label</span> *
          </label>
          <input type="text" placeholder="Type Username here"
            autoFocus
            {...register("Mail", {
              required: 'Email Is Required',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Enter a Valid Email'
              }
            })}
            onFocus={() => trigger("Mail")}

            onKeyUp={() => trigger("Mail")}
            onBlur={() => trigger("Mail")}
            className="input input-info input-bordered w-full max-w-sm" />
          {errors.Mail && (
            <div className="error bg-red-100 text-xs text-red-600 py-1 rounded m-1 px-2">
              {errors.Mail.message}
            </div>)}

          <label className="label mt-5">
            <span className="label-text font-semibold text-sm text-sky-900">Password</span>
            {/* <span className="label-text-alt">Alt label</span> *
          </label>
          <input type="password" placeholder="Type Password here"
            autoComplete='false'
            onKeyUp={() => trigger("Password")}
            onBlur={() => trigger("Password")}
            onFocus={() => trigger("Password")}

            {...register("Password", {
              required: 'Password Is Required'
            })}
            className="input input-info input-bordered w-full max-w-sm" />
          {errors.Password && (
            <div className="error bg-red-100 text-xs text-red-600 py-1 rounded m-1 px-2">
              {errors.Password.message}
            </div>
          )}


        </div>

        <div className="card-footer">
          <div className="flex flex-1 justify-end mt-5">

            <button type="submit" onClick={handleLogin} className="btn btn-block btn-sm btn-primary bg-sky-700 border-none hover:bg-green-700 " disabled={!isDirty || !isValid}>LOGIN</button>
          </div>
        </div>
      </form> 
    */}

     

    </div>
  )
}

export default Login