import React from 'react'

export const Header = () => {
  return (
    <div className='header flex justify-between items-center bg-gray-900 p-10'> 
      
      <h1 className='text-xl font-semibold text-[orange] flex flex-col px-5 '  >Hello,<span className='px-2 text-2xl'>User ✌️</span></h1>
      <div className='nav '> 
        <ul className='flex gap-4 text-lg font-semibold text-[white] p-5'>
          <button className='w-25 p-2 rounded-xl bg-red-500 font-medium'>Log Out</button>
          
        </ul>
      </div>
    </div>
  )
}
