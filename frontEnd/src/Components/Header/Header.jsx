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
        </div>
      </div>
    </header>
  );
}

export default Header;
