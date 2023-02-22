import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './MenuDrawerMobile.scss';

function MenuDrawerMobile({ setMenuDrawerVisible }) {
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
      <div className="menu-drawer-mobile__header">
        <div className="menu-drawer-mobile__container">
          <h2>MENÚ</h2>
        </div>
      </div>
      <div className="menu-drawer-mobile__body">
        <div className="menu-drawer-mobile__container">
          <h3 className="text-dark">Crear cuenta</h3>
          <hr />
          <h3 className="text-dark">Inciar sesión</h3>
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
}

export default MenuDrawerMobile;
