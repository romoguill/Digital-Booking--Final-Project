import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import UserProfile from '../UserProfile/UserProfile';

import { Link } from 'react-router-dom';

import './MenuDrawerMobile.scss';

function MenuDrawerMobile({ setMenuDrawerVisible, isLogged, user }) {
  function handleMenuDrawerClose() {
    setMenuDrawerVisible(false);
  }

  return (
    <aside className="menu-drawer-mobile">
      <button
        className="close-menu button-ghost"
        onClick={handleMenuDrawerClose}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      {isLogged ? (
        <>
          <div className="menu-drawer-mobile__header">
            <div className="menu-drawer-mobile__container">
              <div className="user-icon-mobile">
                <UserProfile name={user} mobile={true} />
              </div>
            </div>
          </div>

          <div className="menu-drawer-mobile__body">
            <div className="menu-drawer-mobile__container">
              <p className="logout-drawer">
                ¿Deseas
                <Link
                  to="/"
                  className="link-button"
                  onClick={handleMenuDrawerClose}
                >
                  <span> cerrar sesión?</span>
                </Link>
              </p>
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
        </>
      ) : (
        <>
          <div className="menu-drawer-mobile__header">
            <div className="menu-drawer-mobile__container">
              <h2>MENÚ</h2>
            </div>
          </div>
          <div className="menu-drawer-mobile__body">
            <div className="menu-drawer-mobile__container">
              <Link to={'/register'} onClick={handleMenuDrawerClose}>
                <h3 className="text-dark">Crear cuenta</h3>
              </Link>
              <hr />
              <Link to={'/login'} onClick={handleMenuDrawerClose}>
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
        </>
      )}
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
