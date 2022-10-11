import React,{useEffect,useState,Component} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import { Autoplay } from 'swiper';


const Register =(props)=>{
    const navigate = useNavigate();
    const [fullName,setFullName]=useState("")
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [country,setCountry]=useState("")
    
    
   
    const submitForm= async (e)=>{
            e.preventDefault();
    fetch('http://127.0.0.1:8001/api/users', {
  method: 'POST',
  body: JSON.stringify({
    fullName:'fullName',
    userName:'userName',
    email:'email',
    password:'password',
    country:'country',
    
  }),
  headers: {
    'Content-Type': 'application/json',
        'Accept': 'application/json'
  },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
    console.log('new user added');
    
    }
    return <>
    <article>
        <form className='form' onSubmit={submitForm}>
            <div className='form-control'>
                <label htmlFor='fullName'>Full Name</label>
                <input type='text' id='fullName' name='fullName'value={fullName} onChange={(e)=>setFullName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor='userName'>User Name</label>
                <input type='text' id='userName' name='userName'  value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <div className='form-control'>
                <label htmlFor='country'>country</label>
                <input type='text' id='country' name='country' value={country} onChange={(e)=>setCountry(e.target.value)}/>
            </div>
            <button type='submit' >Sign Up</button>
        </form>
    </article>
    </>;
};

export default Register;