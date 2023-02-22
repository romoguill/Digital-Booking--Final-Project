import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Brand from './Brand';
import './Header.scss';
import { Link, Route } from 'react-router-dom';
import UserProfile from '../UserProfile/UserProfile';
import {
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

function Header({ user, isLogged, setMenuDrawerVisible }) {
  function handleOpenDrawerMenu() {
    setMenuDrawerVisible(true);
  }

  return (
    <header>
      <div className="container-main">
        <nav className="navbar">
          <Brand />
          {isLogged ? (
            <>
              <p className='welcome-user'>Hola {user}!</p>
              <UserProfile name={user} />
              <Link to={'/'}>
                <button className="button-logout button-primary--empty">
                  <FontAwesomeIcon icon={faRightFromBracket} />
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
          <button
            className="main-menu__hamburger"
            onClick={handleOpenDrawerMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
