import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Login from './Components/Header/Login/Login'
import CreateUser from './Components/Header/CreateUser/CreateUser';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateUser />} />
        </Routes>
    </div>
  );
}

export default App;
