import React from 'react'

export const TaskNum = () => {
  return (
     <div className='flex  gap-5 mt-5 screen p-15'>
        <div className=' w-[45%]  py-9 px-10 bg-[orange]  items-center rounded-lg'>
            <h1 className='text-3xl font-bold  '>0</h1>
           <h1 className='text-3xl font-bold '>New Task</h1> 
        </div>
        <div className=' w-[45%]  py-6 px-9 bg-blue-500  items-center rounded-lg'>
            <h1 className='text-3xl font-bold  '>0</h1>
           <h1 className='text-3xl font-bold '>Complete Task</h1> 
        </div>
        <div className=' w-[45%]  py-6 px-9 bg-green-500  items-center rounded-lg'>
            <h1 className='text-3xl font-bold  '>0</h1>
           <h1 className='text-3xl font-bold '>Accepted Task</h1> 
        </div>
        <div className=' w-[45%]  py-6 px-9 bg-red-400  items-center rounded-lg'>
            <h1 className='text-3xl font-bold  '>0</h1>
           <h1 className='text-3xl font-bold '>Failed Task</h1> 
        </div>
     </div>
  )
}
