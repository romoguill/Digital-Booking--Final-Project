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
import RentalProducts from './Routes/RentalProducts';
import NotFound from './Routes/NotFound';

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
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<CreateUser />} />
          <Route path="producto/:id" element={<RentalProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
