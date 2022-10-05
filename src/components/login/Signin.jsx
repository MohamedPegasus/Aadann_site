import React,{useState} from 'react';
import './Signin.css';

const Signin=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return(
        <div className='login'>
            <form>
                <label>email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"></input>
                <label>password</label>
                <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="password"></input>
                <br></br>
                <button type='submit'>sign in</button>
            </form>
        </div>
    )
}

export default Signin;