import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import Logo from "../image/lg.png";
import {AuthContext} from "../context/authContext.js";
// import "../css/style.scss";

const Navbar = () => {

  const {currentUser, logout}= useContext(AuthContext);

  return (
    <div className='navbar'>
    <div className='container'>
      <div className='logo'>
        <Link to="/">
        <img src={Logo} alt="" />
        </Link>
        
      </div>
      <div className='links'>
        <Link className='link' to="/?cat=art">ART</Link>
        <Link className='link' to="/?cat=science">SCIENCE</Link>
        <Link className='link' to="/?cat=technology">TECHNOLOGY</Link>
        <Link className='link' to="/?cat=cinema">CINEMA</Link>
        <Link className='link' to="/?cat=design">DESIGN</Link>
        <Link className='link' to="/?cat=food">FOOD</Link>
        <span>{currentUser?.username}</span>
        {currentUser?
        ( <span onClick={logout}>Logout</span>):
        (<Link className='link' to="/login">Login</Link>)
         }
        <span>
        <Link className='write' to="/write">Write</Link>
        </span>
      </div>
    </div>
    </div>
  )
}

export default Navbar