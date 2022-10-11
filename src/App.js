import React from 'react';
import './App.css';
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Services from './pages/Services';
import Connect from './pages/Connect';
import Home from './pages/Home';
import Register from './pages/Register';
import Blog from './pages/Blog';
import  Navbar  from './Header';



  function App  () {
  return (
      <BrowserRouter>
      <Routes>
        <Navbar />
        <Route exact path='/'element={ <Home /> } />
        <Route exact path='/services'element={ <Services />} />
        <Route exact path='/concet'element={ <Connect/>} />
        <Route exact path='/blog'element={ <Blog />} />
        <Route exact path='/login'element={ <Login/>} />
        <Route exact path='/register'element={ <Register />} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
