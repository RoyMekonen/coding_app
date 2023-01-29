import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
export default function LoginPage() {
    const navigate = useNavigate()
    const [userName,setUserName] =useState('');
    //login to the application by the check user name
    const handleSubmit = async(e)=>{
        e.preventDefault();
            const { data } = await axios.post('http://localhost:8800/api/login', { userName});
            if(data.userName){
                navigate(`/${data._id}`)
            }else{
                console.log('userName not found');
            }
    }
  return (
    <div>
        <h1>Please Login to the App only with user name</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='enter josh or tom' 
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            />
            <button type='submit'>Login</button>
            <p>Please enter user name josh is a student and tom is a mentor</p>

        </form>

    </div>
  )
}
