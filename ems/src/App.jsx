import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Auth/Login'
import { AdminDashboard} from "./components/Dashboard/AdminDashboard"
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    {/* <EmployeeDashboard/> */}
     {/* <Login/> */}
    <AdminDashboard/>

    </>
  )
}
export default App
