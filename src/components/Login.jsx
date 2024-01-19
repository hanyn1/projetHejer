import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import menu from '../assets/menu.png'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import SideBar from './SideBar';
import { useState } from 'react';
export default function Login() {
  const navige=useNavigate()
  const signup=()=>{
    navige('/Register')
  }
  const Homeclient=()=>{
    navige('/Client')
  }

  const homePage=()=>{
    navige('/')
  }
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleAbout = () => {
    navige('/about');
  };
  return (
    <div className="cc" >
       <img src={menu} alt='menu' className='menu'  onClick={toggleSidebar}/>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <img onClick={homePage} src={logo} alt="logo" className='loulou' />
      <p
        className="aboutt"
        onClick={handleAbout}
      >Help</p>
      <p className='onwen'>LOG IN TO YOUR ACCOUNT</p>
      <input type="text" placeholder="Email" class="login-input" />
      <input type="password" placeholder="Password" class="pass-input" />
      <button onClick={Homeclient} className='odkhel'>Login</button>
      <p className='jdid'>NEED TO CREATE AN ACCOUNT?</p>
      <button onClick={signup} className='kayed'> Register now</button>

    </div>
  )
}
