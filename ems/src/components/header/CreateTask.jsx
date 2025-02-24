import React from 'react'

export const CreateTask = () => {
  return (
    <div className=' h-screen w-screen flex flex-col  items-center'> 
          <div className=' bg-gray-900 h-[50%] w-[95%] mt-15 rounded-lg'>
            <form className='flex justify-between  p-10'>
              <div className='flex flex-col mt-5'>
              <label htmlFor="">Task Ttile</label>
              <input className='border rounded-lg p-1 mb-5 w-[40vmax]' type="text" placeholder='Make a UI design' />
              <label htmlFor="">Date</label>
              <input className='border rounded-lg p-1 mb-5' type="date" placeholder='dd/mm/yyyy' />
              <label  htmlFor="">Asign to</label>
              <input className='border rounded-lg p-1 mb-5' type="text" placeholder='employee name' />
              <label htmlFor="">Category</label>
              <input className='border rounded-lg p-1 mb-5' type="text" placeholder='design, dev,etc' />
              
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">Description</label>
                <textarea className='border rounded-lg p-1 mb-5 w-[40vmax]' name="" id="" cols="30" rows="10"></textarea>
              <button className='font-bold rounded-lg p-2 bg-green-400 text-xl'>Create Task</button>
              </div>
            </form>

            </div>
            
         </div>
  )
};
export default CreateTask;

