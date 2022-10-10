import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router";
import Navbar from"../Header"
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'



function Login ()
{
    const [email,setEmail]=useState([]);
    const [password,setPassword]=useState([]);
    const history= useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')) {
                history("/")
        }
    },  []);
    async function login()
    {
        console.warn(email,password)
        let item={email,password};
        let result= await fetch("http://localhost:8001/api/login",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Origin" :"*"
        }
    })
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history("/")
    }

    return(
        
        <div>
            <Navbar />
            <Header />
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
            <input type='email' className="form-control" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}required/>
            <br />
            <input type='password' className="form-control" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <br />
            <button className="btn btn-primary" onClick={login} >Sign In</button>
            
        </div>
        <Footer />
        </div>
    )
}

export default Login;