import React from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import SideBar from './SideBar';
import { useState } from 'react';
import menu from '../assets/menu.png';
import Swal from 'sweetalert2';
import axios from 'axios';
export default function Rgister() {
  const navige=useNavigate()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [validationError, setValidationError] = useState('');
  const validateInputs = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setValidationError('All fields are required.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(passwordRegex)) {
      setPasswordError(
        'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.'
      );
      return false;
    }
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const register = () => {
    if (!validateInputs() || !validatePassword()) {
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    axios
      .post('http://localhost:4000/authentication/signup', data)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'User Registered',
          text: 'Congratulations! You have successfully registered.',
        });
        navige('/Login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
      <img onClick={()=>{navige('/Login')}} src={logo} alt="logo" className='loulou' />
      <p
        className="aboutt"
        onClick={handleAbout}
      >Help</p>
      <p className='test'>PERSONAL INFORMATIONS</p>
      <input type="text" placeholder="FirstName" className="fN-input"  value={firstName}
    onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="LastName" className="lN-input" value={lastName}
    onChange={(e) => setLastName(e.target.value)} />
      <input type="email" placeholder="Email" className="logi-input" value={email}
          onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="passi-input" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      <input type="password" placeholder="Confirm Password" className="pas-input"  value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}/>
          <br></br>{validationError && <div style={{ color: 'red', marginLeft: 40 }}>{validationError}</div>}
      {passwordError && <div style={{ color: 'red', marginLeft: 40 }}>{passwordError}</div>}
      <button onClick={register} className='regreg'>Register Now</button>
    </div>
  )
}
