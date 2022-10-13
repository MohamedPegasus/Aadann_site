import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Login from './pages/Login';
import Services from './pages/Services';
import Connect from './pages/Connect';
import Index from './pages/Index';
import Register from './pages/Register';
import Blog from './pages/Blog';
import  Navbar  from './Header';



function App() {
  
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <h1>aadann</h1>
          <Navbar />
        <Router>
          <Routes>
              <Route exact path='/'>
                <Index />
              </Route>
              <Route  path='/services'>
                <Services />
              </Route>
          </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
