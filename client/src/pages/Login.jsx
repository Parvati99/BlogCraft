// import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from '../context/authContext';

 const Login = () => {

  const [inputs, setInputs]=useState({
    username:"",
    password:"",
  });

  const [err, setError]= useState(null);

  // if user is already exist then navigate to login
  const navigate= useNavigate();
 

  const {login} = useContext(AuthContext);
  // console.log(currentUser);

  const handleChange= (e)=>{
    setInputs((prev)=>({...prev, [e.target.name]:e.target.value}));

    // console.log(inputs)
  };

  const handleSubmit= async (e)=>{
    e.preventDefault()
    try{
      //  const res= await axios.post("/auth/login", inputs);
     await login(inputs)
       navigate("/");
    }catch(err){ 
      setError(err.response.data);                             
      console.log(err)
  }
  };
  return (
    <div className='auth'>
      <h1>Welcome Back</h1>
      <form action="">
        <input 
        required 
        type="text"
        placeholder='Username' 
        name='username' 
        onChange={handleChange}/>

        <input 
        required 
        type="password"
        placeholder='Password' 
        name='password'
        onChange={handleChange} />

        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have an account?
          <Link to="/register">Register</Link>
        </span>

      </form>

      
    </div>
  )
}

export default Login