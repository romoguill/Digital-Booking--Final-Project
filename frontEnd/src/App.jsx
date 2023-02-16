import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login/Login'
import CreateUser from './Pages/CreateUser/CreateUser'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<CreateUser />} />
      </Routes>
      
    </div>
  )
}

export default App
