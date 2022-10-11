import React, {component } from 'react';
import './App.css';
import {BrowserRouter , Route,Routes, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Services from './pages/Services';
import Connect from './pages/Connect';
import Index from './pages/Index';
import Register from './pages/Register';
import Blog from './pages/Blog';



 function App () {
  
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Switch>
              <Route exact path='/'element={ <Index /> } />
              <Route  path='/services'element={ <Services />} />
              <Route  path='/concet'element={ <Connect/>} />
              <Route  path='/blog'element={ <Blog />} />
              <Route  path='/login'element={ <Login/>} />
              <Route  path='/register'element={ <Register />} />
            </Switch>
        </div>
      </div>
  );
}

export default App;
