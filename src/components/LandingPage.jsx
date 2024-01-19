import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png'

export default function LandingPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const navig = useNavigate();
  const images = [image1, image2, image3, image4, image5];
  const [currentImages, setCurrentImages] = useState(images);
  const handleLogin = () => {
    navig('/Login');
  };
  const handleAbout = () => {
    navig('/about');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate images by shifting the array to the left
      setCurrentImages((prevImages) => [
        ...prevImages.slice(1),
        prevImages[0],
      ]);
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (query) => {
    // Implement search functionality here
    console.log('Searching for:', query);
  };

  return (
    <div className="image-slideshow-container">
       <img src={menu} alt='menu' className='menu'  onClick={toggleSidebar}/>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <img src={logo} alt="logo" className="logo" />
      <p
        
        className="iconLogin"
        onClick={handleLogin}
      >Login</p>
      <p
        
        className="about"
        onClick={handleAbout}
      >Aide</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="image-slideshow">
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="image-card"
          />
        ))}
      </div>
      <footer className="footer">
        <p>&copy; 2024 HK STORE. All rights reserved.</p>
        <p>
          Contact us: <a href="boutique:info@hkstore.com">info@hkstore.com</a>
        </p>
        <p>Phone: + (216) 20 112 470</p>
      </footer>
    </div>
  );
}
