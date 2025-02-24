import React from 'react'
import { Header } from '../header/Header'
import {CreateTask} from '../header/CreateTask'
import {GivenTask} from '../header/GivenTask'
export const AdminDashboard = () => {
  return (
    <div>
      <Header/>
      <CreateTask/>
      <GivenTask/>
       </div>

        
    
  )
}
