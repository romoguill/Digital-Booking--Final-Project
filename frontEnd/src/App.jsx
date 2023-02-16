import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login/Login'
import CreateUser from './Pages/CreateUser/CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
      <CreateUser />
    </div>
  )
}

export default App
