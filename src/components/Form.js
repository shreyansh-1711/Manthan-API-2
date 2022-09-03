import React, { useState } from 'react'
import "./Form.css"
const Form = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const login=()=>{
        console.log(email)
        console.log(password);
    }
  return (
    <div className= "loginPage">
        <div className="loginCon">

          <div className="loginHead">
            <h1>Login to Dashboard</h1>
            <p>Enter your email and password below</p>
          </div>


          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => {
              setEmail(e.target.value);
            }}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {
              setPassword(e.target.value);
            }}/>
          </div>
          <button className="colorBtn" onClick={login}>Login</button>
        </div>
      </div>
  )
}

export default Form

