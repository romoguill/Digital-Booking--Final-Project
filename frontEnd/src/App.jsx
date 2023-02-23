import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Routes/Home';
import Login from './Routes/Login';
import CreateUser from './Routes/CreateUser';

import { UserContext } from './Contexts/Context';

function App() {
  // Estado que determina si el menu lateral en mobile esta visible
  const [menuDrawerVisible, setMenuDrawerVisible] = useState(false);
  const [userAuthInfo, setUserAuthInfo] = useState({
    isLoggedIn: false,
    userInfo: {
      name: undefined,
      lastName: undefined,
    },
  });

  return (
    <UserContext.Provider value={{ userAuthInfo, setUserAuthInfo }}>
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
    </UserContext.Provider>
  );
}

export default App;
