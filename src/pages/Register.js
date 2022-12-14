import React,{useState} from "react";
import { useNavigate } from "react-router";
import Navbar from"../Header"
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'


function Register  () 
{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const history= useNavigate();

    async function signup()
    {
        let item={name,email,password}
        console.warn(item)

        let result= await fetch("http://127.0.0.1:8001/api/register",{
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
        
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type='text' className="form-control" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
            <br />
            <input type='email' className="form-control" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <br />
            <input type='password' className="form-control" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <br />
            <button className="btn btn-primary" onClick={signup}>Sign Up</button>
            
        </div>
        <Footer />
        </div>
    )
}

export default Register;