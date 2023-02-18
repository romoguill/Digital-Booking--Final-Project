import facebookLogo from '../../assets/socialMedia/facebook.png';
import instagramLogo from '../../assets/socialMedia/instagram.png';
import linkedinLogo from '../../assets/socialMedia/linkedin.png';
import twitterLogo from '../../assets/socialMedia/twitter.png';

import './MenuDrawerMobile.scss';

function MenuDrawerMobile() {
  return (
    <aside className="menu-drawer-mobile">
      <div className="menu-drawer-mobile__container">
        <div className="menu-drawer-mobile__header">
          <h2>MENÚ</h2>
        </div>
        <div className="menu-drawer-mobile__body">
          <h3>Crear cuenta</h3>
          <h3>Iniciar Sesion</h3>
        </div>
        <div className="menu-drawer-mobile__footer">
          <div className="footer__copyright">
            <h3>Logo</h3>
            <p>© 2023 SPRINGSENSE</p>
          </div>
          <div className="container__social-media">
            <a href="#">
              <img src={facebookLogo} />
            </a>
            <a href="#">
              <img src={instagramLogo} />
            </a>
            <a href="#">
              <img src={linkedinLogo} />
            </a>
            <a href="#">
              <img src={twitterLogo} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default MenuDrawerMobile;
