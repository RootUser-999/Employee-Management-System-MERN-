import React from 'react'
import { Header } from '../header/Header'
import { TaskNum } from '../header/TaskNum'
import {TaskList} from '../TaskList/TaskList'

export const EmployeeDashboard = () => {
  return (
   <>
    <Header/>
    <TaskNum/>
    <TaskList/>
    
   </>
  )
}
