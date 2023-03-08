import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import UserProfile from '../../UserProfile/UserProfile';

import { Link, useLocation } from 'react-router-dom';

import './MenuDrawerMobile.scss';
import { useContext } from 'react';
import { UserContext } from '../../../Contexts/Context';

function MenuDrawerMobile({ setMenuDrawerVisible }) {
  const { userAuthInfo, setUserAuthInfo } = useContext(UserContext);

  const location = useLocation();

  function handleMenuDrawerClose() {
    setMenuDrawerVisible(false);
  }

  function handleLogout() {
    setUserAuthInfo(false);
    handleMenuDrawerClose();
  }

  return (
    <aside className="menu-drawer-mobile">
      <button
        className="close-menu button-ghost"
        onClick={handleMenuDrawerClose}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <>
        <div className="menu-drawer-mobile__header">
          <div className="menu-drawer-mobile__container">
            {userAuthInfo.isLoggedIn ? (
              <>
                <div className="user-icon-mobile">
                  <UserProfile userInfo={userAuthInfo.userInfo} mobile={true} />
                </div>
              </>
            ) : (
              <h2>MENÚ</h2>
            )}
          </div>
        </div>

        <div className="menu-drawer-mobile__body">
          <div className="menu-drawer-mobile__container">
            {userAuthInfo.isLoggedIn ? (
              <>
                <div className="logout-container">
                  <p className="logout-drawer">
                    ¿Deseas{' '}
                    <span>
                      <Link
                        to="/"
                        className="link-button"
                        onClick={handleLogout}
                      >
                        cerrar sesión
                      </Link>
                    </span>
                    ?
                  </p>
                </div>
              </>
            ) : (
              <>
                {location.pathname === '/register' || (
                  <Link
                    className="nav-link-menu"
                    to={'/register'}
                    onClick={handleMenuDrawerClose}
                  >
                    <h3 className="text-dark">Crear cuenta</h3>
                  </Link>
                )}

                {location.pathname === '/' && <hr />}

                {location.pathname === '/login' || (
                  <Link
                    className="nav-link-menu"
                    to={'/login'}
                    onClick={handleMenuDrawerClose}
                  >
                    <h3 className="text-dark">Inciar sesión</h3>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        <div className="menu-drawer-mobile__footer">
          <div className="menu-drawer-mobile__container">
            <div className="container__social-media">
              <a className="social-media-icon" href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="social-media-icon" href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="social-media-icon" href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="social-media-icon" href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </>
    </aside>
  );
}
{
  /* <div className="menu-drawer-mobile__header">
        <div className="menu-drawer-mobile__container">
          <h2>MENÚ</h2>
        </div>
      </div>
      <div className="menu-drawer-mobile__body">
        <div className="menu-drawer-mobile__container">
          <Link to={"/register"} onClick={handleMenuDrawerClose}>
            <h3 className="text-dark">Crear cuenta</h3>
          </Link>
          <hr />
          <Link to={"/login"} onClick={handleMenuDrawerClose}>
            <h3 className="text-dark">Inciar sesión</h3>
          </Link>
        </div>
      </div>
      <div className="menu-drawer-mobile__footer">
        <div className="menu-drawer-mobile__container">
          <div className="container__social-media">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
} */
}

export default MenuDrawerMobile;
