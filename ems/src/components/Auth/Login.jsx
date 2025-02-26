import React, { useState } from 'react'

export const Login = ({handleLogin}) => {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  const submitHandler = (e) => {
    handleLogin(email,password);
    setemail=("");
    setpassword=("")
    e.preventDefault();
  }
  
  return (
    <div className='text-white h-screen w-screen flex items-center justify-center bg-[url("../../../public/images/login.jpg")] bg-cover bg-center '>
        <div  className='bg-gray-900 bg-opacity-20 flex flex-col   rounded-xl py-40 px-30   flex items-center justify-center '>
            <h1 className=' mb-10 text-4xl font-bold '>Log In</h1>
            <form
            onSubmit={(e)=>{submitHandler(e);}}

            className='flex flex-col items-center  justify-center '>
                <input 
                required
                value={email}
                onChange={(e)=>{ setemail(e.target.value)}}
                 className='mb-5 text-l border-1 border-white-600 w-70 h-12 rounded-full py-2 px-4 ' type="email" placeholder='Email' />
                
                <input required 
                value={password}
                onChange={(e)=>{ setpassword(e.target.value)}}
                className='mb-5 border-1 rounded-full py-2 px-4 w-70 h-12' type="password" placeholder='Password' />
                
                
                <div>
                <button  style={{color:'white',background:'#32AC64'}} className="w-25 rounded-xl border-green-600 py-2 px-4  ">
                  Log In
                </button>
                <button style={{color:'white', background:'blue'}} className="ml-3 rounded-xl border-blue-600 py-2  px-5 text-green-600 ">
                  Sign Up
                </button>
                <p className='text-blue-600 mt-3 ' ><a href="" >Forgot Password?</a></p>
                </div>
            </form>

        </div>
    </div>
  )
}
