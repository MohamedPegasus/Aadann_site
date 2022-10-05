import React from 'react';
import './App.css';
import Navbar from './Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Services from './pages/Services';
import Connect from './pages/Connect';
import Home from './pages/Home';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
    <BrowserRouter>
      <Navbar />
      <Header />
      <h1>Aadann</h1>
      <Routes>
        <Route path='/'element={ <Home />} />
        <Route path='/services'element={ <Services />} />
        <Route path='/connect'element={ <Connect/>} />
        <Route path='/blog'element={ <Blog />} />
        <Route path='/login'element={ <Login/>} />
        <Route path='/register'element={ <Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
