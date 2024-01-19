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
  const homePage=()=>{
    navige('/')
  }
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="cc" >
       <img src={menu} alt='menu' className='menu'  onClick={toggleSidebar}/>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      
      <img onClick={homePage} src={logo} alt="logo" className='loulou' />
    </div>
  )
}
