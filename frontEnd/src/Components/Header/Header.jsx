import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Brand from './Brand';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import UserProfile from '../UserProfile/UserProfile';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../Contexts/Context';

function Header({ user, setMenuDrawerVisible }) {
  const { userAuthInfo, setUserAuthInfo } = useContext(UserContext);

  const navigate = useNavigate();

  function handleOpenDrawerMenu() {
    setMenuDrawerVisible(true);
  }

  function handleLogout() {
    setUserAuthInfo(false);
  }

  return (
    <header>
      <div className="container-main">
        <nav className="navbar">
          <Brand />
          {userAuthInfo.isLoggedIn ? (
            <>
              <UserProfile userInfo={userAuthInfo.userInfo} mobile={false} />
              <Link to={'/'}>
                <button
                  className="button-logout button-primary--empty"
                  onClick={handleLogout}
                >
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
                <button className="button-primary button-primary--empty">
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
