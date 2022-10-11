import React, {component } from 'react';
import './App.css';
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Services from './pages/Services';
import Connect from './pages/Connect';
import Home from './pages/Home';
import Register from './pages/Register';
import Blog from './pages/Blog';



 function App () {
  
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='gradient__bg'>
          
            <Route exact path='/'element={ <Home /> } />
            <Route  path='/services'element={ <Services />} />
            <Route  path='/concet'element={ <Connect/>} />
            <Route  path='/blog'element={ <Blog />} />
            <Route  path='/login'element={ <Login/>} />
            <Route  path='/register'element={ <Register />} />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
