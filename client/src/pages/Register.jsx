import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios"
import Popuplogin from './Popuplogin';

const Register = () => {

  const [inputs, setInputs]=useState({
    username:"",
    email:"",
    password:"",
  });

  const [err, setError]= useState(null);

  // if user is already exist then navigate to login
  const navigate= useNavigate();

  const handleChange= (e)=>{
    setInputs((prev)=>({...prev, [e.target.name]:e.target.value}));

    // console.log(inputs)
  };

  const handleSubmit= async (e)=>{
    e.preventDefault()
    try{
      await axios.post("/auth/register", inputs);
       navigate("/login");
    }catch(err){ 
      setError(err.response.data);                             
      console.log(err)
  }
  };


  return (
    <div className='auth'>
    <h1>JOIN BlogCraft</h1>
    <form action="">
      <input 
      required 
      type="text"
      placeholder='Username' 
      name='username' 
      onChange={handleChange}/>

      <input 
      required 
      type="email"
      placeholder='E-mail' 
      name='email' 
      onChange={handleChange}/>
      
      <input 
      required 
      type="password"
      placeholder='Password' 
      name='password'
      onChange={handleChange} />

      <button onClick={handleSubmit}>Register</button>
      {err && <p>{err}</p>}
      <span>Do you have an account?
        <Link to="/login">Login</Link>
      </span>


      <div className="loginwithsocialmedia">
        <span><b>----------------------</b></span>
        <span className='or'>   OR   </span>
        <span><b>----------------------</b></span>
        <Popuplogin/>
      </div>
    </form>
  </div>
)
}

export default Register