import React, {component } from 'react';
import './App.css';
import {BrowserRouter , Route,Routes,}  from 'react-router-dom';
import Login from './pages/Login';
import Services from './pages/Services';
import Connect from './pages/Connect';
import Index from './pages/Index';
import Register from './pages/Register';
import Blog from './pages/Blog';



 function App () {
  
  return (
    <div className='App'>
        
      <Routes>
        <Route exact path='/'component={ <Index />} />
        <Route path='/services'component={ <Services />} />
        <Route path='/concet'component={ <Connect/>} />
        <Route path='/blog'component={ <Blog />} />
        <Route path='/login'component={ <Login/>} />
        <Route path='/register'component={ <Register />} />
      </Routes>
    
    </div>
  );
}

export default App;
