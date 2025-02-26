const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Landing Page",
          "taskDescription": "Create a responsive landing page UI",
          "taskDate": "2025-02-26",
          "category": "UI/UX",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix Navbar Bug",
          "taskDescription": "Resolve navigation bar issue on mobile devices",
          "taskDate": "2025-02-27",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Create API Endpoints",
          "taskDescription": "Develop REST API endpoints for user authentication",
          "taskDate": "2025-02-28",
          "category": "Backend",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Database Optimization",
          "taskDescription": "Optimize queries for faster database performance",
          "taskDate": "2025-03-01",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Write Test Cases",
          "taskDescription": "Create unit tests for authentication module",
          "taskDate": "2025-03-02",
          "category": "Testing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Refactor Codebase",
          "taskDescription": "Improve code readability and efficiency",
          "taskDate": "2025-03-03",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Security Audit",
          "taskDescription": "Perform security analysis on the app",
          "taskDate": "2025-03-04",
          "category": "Cybersecurity",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Bug Fixes",
          "taskDescription": "Fix reported bugs from QA team",
          "taskDate": "2025-03-05",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Deploy Application",
          "taskDescription": "Push the latest build to production servers",
          "taskDate": "2025-03-06",
          "category": "DevOps",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Performance Testing",
          "taskDescription": "Test application performance under heavy load",
          "taskDate": "2025-03-07",
          "category": "Testing",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
const admin=[
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
      
]
export const setLocalStorage =()=>{
    localStorage.setItem('eployees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage =()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}
