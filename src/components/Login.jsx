import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import menu from '../assets/menu.png';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import SideBar from './SideBar';
import axios from 'axios'; // Add this import
import Swal from 'sweetalert2';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(passwordRegex)) {
      setPasswordError(
        'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.'
      );
      return false; // Return false to indicate validation failure
    }
    setPasswordError('');
    return true;
  };
   const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(emailRegex);
  };

  const loginFun = () => {
    console.log('loginFun called')
    console.log('Login button clicked');
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Empty Fields',
        text: 'Please fill in all fields',
      });
      return;
    }

    if (!validateEmail()) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
      });
      return;
    }
    try {
      if (!validatePassword()) {
        // Display an error message when password validation fails
        Swal.fire({
          icon: 'error',
          title: 'Invalid Password',
          text: 'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.',
        });
        return;
      }
    } catch (error) {
      console.error('Error in validatePassword:', error);
      return;
    }
     

    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    axios
      .post('http://localhost:4000/authentication/login', data)
      .then((response) => {
        console.log(response.data);
        if (response.data.password === 'false') {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Password',
            text: 'Please enter a valid password',
          });
        } else {
          navigate('/Client');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signup = () => {
    navigate('/Register');
  };

  const homePage = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleAbout = () => {
    navigate('/about');
  };

  return (
    <div className="cc">
      <img src={menu} alt="menu" className="menu" onClick={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <img onClick={homePage} src={logo} alt="logo" className="loulou" />
      <p className="aboutt" onClick={handleAbout}>
        Help
      </p>
      <p className="onwen">LOG IN TO YOUR ACCOUNT</p>
      <input
        type="text"
        placeholder="Email"
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="pass-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      {passwordError && (
        <div style={{ color: 'red', marginLeft: 40 }}>{passwordError}</div>
      )}
      <button onClick={loginFun} className="odkhel">
        Login
      </button>
      <p className="jdid">NEED TO CREATE AN ACCOUNT?</p>
      <button onClick={signup} className="kayed">
        Register now
      </button>
    </div>
  );
}
