import { useContext, useState, useEffect } from "react";
import "./App.css";
import { Login } from "./components/Auth/Login";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import  AuthContext  from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  // const { authData, setAuthData } = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email === "hi@gmail.com" && password === "hi") {
      setUser("admin");
    } else if (email === "hi@gmail.com" && password === "hi"){
      setUser('employee')}
    else{
      alert("Invalid email or password");
    }
  };

  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? <AdminDashboard /> : user === "employee" ? <EmployeeDashboard /> : null}
    </>
  );
}

export default App;
