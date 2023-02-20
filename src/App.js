import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import { motion } from 'framer-motion';


let easeing = [0.6,0.01,0.99];

const stagger = {
  animate:{
    transtion:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}
const fadeInUp ={
  iniitial:{
    y:-60,
    opacity:0,
    transtion:{
      duration:0.6, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transtion:{
      duration:0.6,
      delay:0.5,
      ease:easeing
    }
  }
};
const transtion = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};
const firstName ={
  iniitial:{
    y:-20,
  },
  animate:{
    y:0,
    transtion:{
      delayChildren:0.4,
      staggerChildren:0.4,
      staggerDirection:-1
    }
  }
}
const lastName ={
  iniitial:{
    y:-20,
  },
  animate:{
    y:0,
    transtion:{
      delayChildren:0.4,
      staggerChildren:0.4,
      staggerDirection: 1
    }
  }
}
const letter = {
  iniitial:{
    y:400,
  },
  animate:{
    y:0,
    transtion:{duration:1, ...transtion}
  }
}
const header ={
  iniitial:{
    y:-60,
    opacity:0,
    transtion:{
      duration:0.6, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:0,
    transtion:{
    duration:0.6, ease:easeing
    }
  }
}
function App() {
  return (
    <div className="App">
    <div className='gradient__bg'>
    <Router>
    <Header/>
    < Landing />
    <Routes>
    <Route exact path='/Aadann_site/' element={<Home />}></Route>
    <Route path='/Aadann_site/Services'  element={<Services />}></Route>
    <Route path='/Aadann_site/Contact'  element={<Contact />}></Route>
    <Route path='/Aadann_site/Blog'  element={<Blog />}></Route>
    <Route path='/Aadann_site/Login'  element={<Login />}></Route>
    <Route path='/Aadann_site/Register'  element={<Register />}></Route>
    </Routes>
    
    <Footer />
    </Router>
    </div>
    </div>
  );
}

export default App;
