import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Brand from './Brand';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="container-main">
        <div className="container-header">
          <Brand />
          <div className="account-actions">
            <button className="button-primary button-primary--empty">
              Crear Cuenta
            </button>
            <button className="button-primary button-primary--full">
              Iniciar sesión
            </button>
          </div>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
}

export default Header;
