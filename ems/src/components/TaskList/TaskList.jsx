import React from 'react'

export const TaskList = () => {
  return (
    <div id='tasklist' style={{scrollbarWidth: "none", msOverflowStyle:"none"}} className='h-[40vh]  overflow-x-auto py-5 w-full p-15 flex flex-nowrap items-center gap-5 justify-start '>
            <div className='h-full  flex-shrink-0 w-[40vmin] bg-red-400  rounded-lg'>
               <div className='p-5 flex justify-between '>
                    <h1 className='text-l font-bold  bg-red-500 px-1 rounded'>High</h1>
                    <h2 className='text-l font-semibold'>24 feb 2025</h2>
               </div>
               <h2 className='mt-5 text-xl px-4 font-bold'>Make a Youtube Video</h2>
               <p className='  flex text-left px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, voluptates exercitationem accusamus molestias fugit minus assumenda quia veritatis deleniti obcaecati quod, ullam dolor eum quo temporibus debitis, iure delectus magnam!</p>
            </div>
           
   
    </div>
  )
}
