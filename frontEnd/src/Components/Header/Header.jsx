import Brand from './Brand';
import './Header.scss';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from '../../Routes/Home';
import UserProfile from '../UserProfile/UserProfile';

function Header( {user, isLogged} ) {


  return (
    <header>
      <div className="container-main">
        <div className="container-header">
          <Brand />
          { isLogged ?

          <>
            <p className='welcome-user'>Bienvenido {user} !</p>
            <UserProfile name={user} />
            <Link to={'/'}>
              <button className="button-primary button-primary--empty">
                Cerrar Sesión
              </button>
            </Link>
          </>

          :
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
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
