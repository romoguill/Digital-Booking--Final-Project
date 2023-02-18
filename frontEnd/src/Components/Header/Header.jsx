import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Brand from './Brand';
import './Header.scss';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from '../../Routes/Home';
import UserProfile from '../UserProfile/UserProfile';

function Header({ user, isLogged }) {
  return (
    <header>
      <div className="container-main">
        <nav className="navbar">
          <Brand />
          {isLogged ? (
            <>
              <p className="welcome-user">Bienvenido {user} !</p>
              <UserProfile name={user} />
              <Link to={'/'}>
                <button className="button-primary button-primary--empty">
                  Cerrar Sesión
                </button>
              </Link>
            </>
          ) : (
            <div className="account-actions">
              <Link to={'/register'}>
                <button className="button-primary button-primary--empty">
                  Crear Cuenta
                </button>
              </Link>

              <Link to={'/login'}>
                <button className="button-primary button-primary--full">
                  Iniciar sesión
                </button>
              </Link>
            </div>
          )}
          <button className="main-menu__hamburger">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
