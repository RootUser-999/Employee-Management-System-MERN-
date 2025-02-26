import React from 'react';
import { Header } from '../header/Header';
import { CreateTask } from '../header/CreateTask';
import AllTasks from '../header/AllTasks'; 

export const AdminDashboard = () => {
  return (
    <>
      <Header />
    <div className='flex flex-col items-center'>
      <CreateTask />
      <AllTasks />
    </div>
    </>
  );
};

export default AdminDashboard;
