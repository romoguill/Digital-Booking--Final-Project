import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Routes/Home';
import Login from './Components/Header/Login/Login';
import CreateUser from './Components/Header/CreateUser/CreateUser';

function App() {
  // Estado que determina si el menu lateral en mobile esta visible
  const [menuDrawerVisible, setMenuDrawerVisible] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              menuDrawerVisible={menuDrawerVisible}
              setMenuDrawerVisible={setMenuDrawerVisible}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              menuDrawerVisible={menuDrawerVisible}
              setMenuDrawerVisible={setMenuDrawerVisible}
            />
          }
        />
        <Route
          path="/register"
          element={
            <CreateUser
              menuDrawerVisible={menuDrawerVisible}
              setMenuDrawerVisible={setMenuDrawerVisible}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
