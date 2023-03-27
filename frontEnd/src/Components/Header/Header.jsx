import logo from '../../assets/Images/logo-digital-booking.png';
import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import UserProfile from '../UserProfile/UserProfile';

import Navbar from './Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';

function Header({ setMenuDrawerVisible }) {
  const { auth, logout } = useAuth();
  const [isAdminMenuVisible, setIsAdminMenuVisible] = useState(false);

  const navigate = useNavigate();

  function handleOpenDrawerMenu() {
    setMenuDrawerVisible(true);
  }

  function handleLogout() {
    logout();
    navigate('/');
  }

  function toggleMenuVisibility() {
    setIsAdminMenuVisible(!isAdminMenuVisible);
  }

  return (
    <header>
      <div className="container-main">
        <Link className="app-logo-link" to={'/home'}>
          <img className="app-logo" src={logo} />
        </Link>

        {auth.userEmail ? (
          <div className="account-options">
            {auth.userRole === 1 && (
              <div className="menu--admin" onClick={toggleMenuVisibility}>
                <p
                  className={`menu--admin__title ${
                    isAdminMenuVisible ? 'selected' : ''
                  }`}
                >
                  Admin
                </p>
                <ul
                  className={`menu--admin__options ${
                    !isAdminMenuVisible ? 'hidden' : ''
                  }`}
                >
                  <li>Crear Producto</li>
                  <hr />
                  <li>Modificar Producto</li>
                </ul>
              </div>
            )}
            <UserProfile />
            <Link to={'/'} onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </Link>
          </div>
        ) : (
          <Navbar />
        )}

        {
          <button
            className="main-menu__hamburger"
            onClick={handleOpenDrawerMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        }
      </div>
    </header>
  );
}

export default Header;
