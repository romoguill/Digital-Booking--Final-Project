import './sassStyles/base/_general.scss';
import './sassStyles/base/_typography.scss';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Routes/Home';
import Login from './Routes/Login';
import CreateUser from './Routes/CreateUser';

import { UserContext } from './Contexts/Context';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MenuDrawerMobile from './Components/Header/MenuDrawerMobile/MenuDrawerMobile';

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
    <div className="app">
      <UserContext.Provider value={{ userAuthInfo, setUserAuthInfo }}>
        {menuDrawerVisible && (
          <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
        )}

        <Header setMenuDrawerVisible={setMenuDrawerVisible} />

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

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
