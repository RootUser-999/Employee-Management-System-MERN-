import React from 'react';

const AllTasks = () => {
  const tasks = [
    { name: "Shahzeb", role: "UI/UX Design", date: "12/12/2021", status: "Assigned" },
    { name: "Sam", role: "Front-end Development", date: "01/01/2021", status: "Pending" },
    { name: "Zaid", role: "Back-end Development", date: "10/01/2021", status: "Pending" },
    { name: "Zaid", role: "Back-end Development", date: "10/01/2021", status: "Pending" },
    { name: "Zaid", role: "Back-end Development", date: "10/01/2021", status: "Pending" },
    { name: "Zaid", role: "Back-end Development", date: "10/01/2021", status: "Pending" }
  ];

  return (
    <div className="flex flex-col items-center bg-gray-900 w-[95%] rounded-lg py-5 mt-10 overflow-y-auto">
      {tasks.map((task, index) => (
        <div key={index} className="px-5 flex items-center justify-between h-[40px] w-[98%] bg-red-400 rounded mt-3">
          <h2>{task.name}</h2>
          <h2>{task.role}</h2>
          <h2>{task.date}</h2>
          <h2>{task.status}</h2>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
