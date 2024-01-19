import React from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import SideBar from './SideBar';
import { useState } from 'react';
import menu from '../assets/menu.png'
export default function Rgister() {
  const navige=useNavigate()
  const loginPage=()=>{
    navige('/Login')
  }
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleAbout = () => {
    navige('/about');
  };
  return (
    <div className='cho'>
       <img src={menu} alt='menu' className='menu'  onClick={toggleSidebar}/>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <img onClick={loginPage} src={logo} alt="logo" className='loulou' />
      <p
        className="aboutt"
        onClick={handleAbout}
      >Help</p>
      <p className='test'>PERSONAL INFORMATIONS</p>
      <input type="text" placeholder="FirstName" class="fN-input" />
      <input type="text" placeholder="LastName" class="lN-input" />
      <input type="text" placeholder="Email" class="logi-input" />
      <input type="password" placeholder="Password" class="passi-input" />
      <input type="password" placeholder="Confirm Password" class="pas-input" />
      <button onClick={loginPage} className='regreg'>Register Now</button>
    </div>
  )
}
