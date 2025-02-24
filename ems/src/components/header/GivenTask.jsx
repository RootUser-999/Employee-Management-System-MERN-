import React from 'react';

const GivenTask = () => {
  const tasks = [
    { name: "Shahzeb", role: "UI/UX Design", date: "12/12/2021", status: "Assigned" },
    { name: "Sam", role: "Front-end Development", date: "01/01/2021", status: "Pending" },
    { name: "Zaid", role: "Back-end Development", date: "10/01/2021", status: "Pending" },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-900 w-[95%] mt-10 rounded-lg py-10">
      {tasks.map((task, index) => (
        <div key={index} className="px-2 flex items-center justify-between w-[98%] h-10 bg-red-400 rounded-xl mt-3">
          <h2>{task.name}</h2>
          <h2>{task.role}</h2>
          <h2>{task.date}</h2>
          <h2>{task.status}</h2>
        </div>
      ))}
    </div>
  );
};

export default GivenTask;
