import './sassStyles/base/_general.scss';
import './sassStyles/base/_typography.scss';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Routes/Home';
import Login from './Routes/Login';
import CreateUser from './Routes/CreateUser';

import { UserContext } from './Contexts/Context';
import FormTemplate from './Components/Form/FormLogin';

function App() {
  // Estado que determina si el menu lateral en mobile esta visible
  const [menuDrawerVisible, setMenuDrawerVisible] = useState(false);
  const [userAuthInfo, setUserAuthInfo] = useState({
    isLoggedIn: false,
    userInfo: {
      name: undefined,
      lastName: undefined,
      email: undefined,
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
          {/* TODO: eliminar la ruta cuando termine las pruebas del formulario */}
          <Route path="/form" element={<FormTemplate />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
