import React from 'react'

export const Login = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div  className='flex flex-col  border-2 rounded-xl py-60 px-30 border-white-600  flex items-center justify-center'>
            <h1 className='mb-10 text-30'>Log In</h1>
            <form className='flex flex-col items-center  justify-center'>
                <input className='mb-5 text-l border-1 border-white-600 rounded-full py-2 px-4 ' type="text" placeholder='Name' />
                <input className='mb-5 border-1 rounded-full py-2 px-4' type="password" placeholder='Password' />
                <button style={{color:'green'}} className="border-2 rounded-xl border-green-600 py-2 px-5 text-green-600 !important">
                  Log In
                </button>
</form>

        </div>
    </div>
  )
}
