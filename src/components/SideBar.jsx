import React from 'react';
import './SideBar.css';
import menu from '../assets/menu.png'
import { useNavigate } from 'react-router-dom';
export default function SideBar({ isOpen, toggleSidebar }) {
    const navige=useNavigate()
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img className="meenu" src={menu} alt='menu' onClick={toggleSidebar}/>
       
      <ul>
        <li onClick={()=>{navige('/Femme')}} >Femme</li>
        <li onClick={()=>{navige('/Homm')}}>Homme</li>
      </ul>
    </div>
  )
}
