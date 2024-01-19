import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Rgister';
import AboutUs from './components/AboutUs';
import Femme from './components/Femme';
import Homme from './components/Homme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          HK STORE
        </title>
        <link rel='icon' href='/logo.png' type="image/x-icon" />
      </Helmet>
      <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/Homme' element={<Homme/>}/>
          <Route path='Femme' element={<Femme/>}/>
        </Routes>
      </Router>
    </div>
    </HelmetProvider>
    
  );
}

export default App;
