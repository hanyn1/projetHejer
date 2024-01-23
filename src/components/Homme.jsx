import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import './Homme.css';

export default function Homme() {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const homePage = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getProduit/produit');
        const allProducts = response.data;

        const hommeProducts = allProducts.filter(product => product.category === 'Men');

        setProducts(hommeProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='prody'>
      <img src={menu} alt='meni' className='meni' onClick={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <img src={logo} alt="logy" className="logoo" onClick={homePage} />

      <div className="row row-cols-1 row-cols-md-3 g-2">
        {products.map(product => (
          <div className="col" key={product.id}>
            <div className="card" style={{top:"-40px",left:"150px", width:"250px"}}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Brand: {product.brand}</h5>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text">Price: {product.price}$</p>
                <p className="card-text"><span style={{ color: '#C7E9B0' }}>Discount: {product.discount}$</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
